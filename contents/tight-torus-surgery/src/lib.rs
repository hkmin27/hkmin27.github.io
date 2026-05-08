use wasm_bindgen::prelude::*;
use std::mem;

#[derive(Debug, Clone, Copy)]
struct Fraction {
    num: i64,        //q     
    den: i64,        //p
}

impl Fraction {
    // constructor: make it rel prime
    fn new(mut num: i64, mut den: i64) -> Self {
        //infinity
        if den == 0 {
            return Self { num: 1, den: 0 };
        }

        // check if p and q are relatively prime
        let g = gcd(num.abs(), den.abs());
        if g != 1 {
            num /= g;
            den /= g; 
        }

        // only numerator can be negative
        if den < 0 {
            num = -num;
            den = -den;
        }

        Self { num, den }
    }

    // constructor for torus knot: |num| > |den|
    fn new_torus(mut num: i64, mut den: i64) -> Self {
        assert!(den != 0, "Denominator cannot be zero");
        
        if gcd(num.abs(), den.abs()) != 1 {
            panic!("({}, {}) are not relatively prime", num, den);
        }

        // swap if |p| > |q| 
        if num.abs() < den.abs() {
            mem::swap(&mut num, &mut den);
        }

        // only the numerator can be negative
        if den < 0 {
            num = -num;
            den = -den;
        }

        Self { num, den }
    }

    // Fraction to ContinuedFraction
    fn to_cf(&self) -> ContinuedFraction {
        let mut num = self.num;
        let mut den = self.den;
        let mut terms = Vec::new();

        // calculate the continued fraction terms using the Euclidean algorithm
        while den != 0 {
            let r = num.rem_euclid(den);
            let q = num.div_euclid(den);

            terms.push(q);
            num = -den;
            den = r;
        }
        ContinuedFraction { terms: terms }
    }

    // ContinuedFraction for path1 
    fn to_cf_path1(&self) -> ContinuedFraction {
        // q/p < 0 -> get cf
        if self.num < 0 {
            return self.to_cf()
        }

        // q/p > 0 -> get cf of (p/q-1)^-1
        let f = Fraction::new_torus(self.num, self.den - self.num);
        f.to_cf()
    }

    // ContinuedFraction for path2
    fn to_cf_path2(&self) -> ContinuedFraction {
        // cf of (q/p - ceil(q/p))^-1
        let f = Fraction::new_torus(self.den, self.num - self.den * self.ceiling());
        f.to_cf()
    }

    // m(p,q) = solid tori
    fn m(&self) -> i64 {
        let calculate = |terms: &[i64]| -> i64 {
            let (last, rest) = terms.split_last()
                .expect("The continued fraction is empty!");
            rest.iter().map(|x| x.abs() - 1).product::<i64>() * last.abs()
        };

        let a = calculate(&self.to_cf_path1().terms);
        let b = calculate(&self.to_cf_path2().terms);

        a * b
    } 

    // n(p,q) = lens
    fn n(&self) -> i64 {
        let calculate = |terms: &[i64]| -> i64 {
            terms.iter().map(|x| x.abs() - 1).product()
        };

        let a = calculate(&self.to_cf_path1().terms);
        let b = calculate(&self.to_cf_path2().terms);

        a * b
    } 

    fn ceiling(&self) -> i64 {
        if self.num < 0 {
            (self.num) / self.den
        } else {
            (self.den + self.num - 1) / self.den
        }
    }

    // (num/den)^c
    fn clockwise(&self) -> Self {
        if self.num == 0 {
            return Fraction { num: 1, den: 0 };
        } 
        if self.den == 0 {
            return Fraction { num: 0, den: 1 };
        }

        // num/den < 0 
        if self.num < 0 {
            if  self.num == -1 {            // (-1/n)^c = 0 
                return Fraction::new(0,1)
            } 
            
            let mut cf = self.to_cf();
            if let Some(last) = cf.terms.last_mut() {
                *last += 1; 
            }
            cf.to_f()

        // num /den > 0
        } else {
            if self.den == 1 {          // n^c = infinity
                return Fraction { num: 1, den: 0 }
            }                                

            let frac = Fraction::new(-self.num, self.den);
            let mut cf = frac.to_cf();
            cf.terms.pop();
            let f = cf.to_f();

            Fraction::new(-f.num,f.den)
        }
    }

    fn anti_clockwise(&self) -> Self {
        if self.num == 0 {
            return Fraction { num: 1, den: 0 };
        } 
        if self.den == 0 {
            return Fraction { num: 0, den: 1 };
        } 
        
        // num/den < 0
        if self.num < 0 {              
            if self.den == 1 {      // (-n)^a = infinity
                return Fraction { num: 1, den: 0 };
            } 

            let mut cf = self.to_cf();
            cf.terms.pop();
            cf.to_f()

        // num/den > 0
        } else {
            if self.num == 1 {        // (1/n)^a = 0 
                return Fraction::new(1,0)
            }                         

            let frac = Fraction::new(-self.num, self.den);
            let mut cf = frac.to_cf();

            if let Some(last) = cf.terms.last_mut() {
                *last += 1; 
            }
            let f = cf.to_f();
            Fraction::new(-f.num, f.den)
        }
    }
}

struct ContinuedFraction {
    terms: Vec<i64>,
}

impl ContinuedFraction {
    // ContinuedFraction to Fraction
    fn to_f(&self) -> Fraction {
        if self.terms.is_empty() {
            panic!("Cannot convert an empty ContinuedFraction to a Fraction!");
        }

        let mut num: i64 = 1;
        let mut den: i64 = 0;

        // inverse Euclidean algorithm
        for &term in self.terms.iter().rev() {
            let old_num = num;
            num = term * num + den;
            den = -old_num;
        }
        num = -num.abs();
        den = den.abs();
        Fraction::new(num, den)
    }
}

// Ordering
use std::cmp::Ordering;

// Fraction & Fraction 
impl PartialEq for Fraction {
    fn eq(&self, other: &Self) -> bool {
        self.num == other.num && self.den == other.den
    }
}

impl PartialOrd for Fraction {
    fn partial_cmp(&self, other: &Self) -> Option<Ordering> {
        // a/b vs c/d  =>  ad vs bc
        (self.num * other.den).partial_cmp(&(self.den * other.num))
    }
}

// Fraction & i64 
impl PartialEq<i64> for Fraction {
    fn eq(&self, other: &i64) -> bool {
        // a/b == n  =>  a == nb
        self.num == other * self.den
    }
}

impl PartialOrd<i64> for Fraction {
    fn partial_cmp(&self, other: &i64) -> Option<Ordering> {
        // a/b vs n  =>  a vs nb
        self.num.partial_cmp(&(other * self.den))
    }
}

fn gcd(a: i64, b: i64) -> i64 {
    let mut a = a.abs();
    let mut b = b.abs();

    while b != 0 {
        a %= b; 
        std::mem::swap(&mut a, &mut b);
    }
    a
}

fn dot_product(r: Fraction, s: Fraction) -> i64 {
    let (a, b) = (r.num, r.den);
    let (c, d) = (s.num, s.den);

    a * d  - b * c
} 

// phi_infty(r), r = a/b
fn phi_inf(r: Fraction) -> i64 {
    let (a, b) = (r.num, r.den);

    // normalizing (a,b)
    let new_a = if a.rem_euclid(b) == 0 {
        1
    } else {
        a.rem_euclid(b)
    };

    // now find continued fraction for -b/a
    let f = Fraction::new_torus(-b, new_a);
    let terms = f.to_cf().terms;

    let (first, rest) = terms.split_first()
        .expect("The continued fraction is empty!");
    rest.iter().map(|x| x.abs() - 1).product::<i64>() * first.abs()
}

// phi_s(r) r = a/b, s = c/d
// r < s
fn phi_s(r: Fraction, s: Fraction) -> i64 {       
    if r >= s {
        panic!("phi_s: s should be larger than r!");
    }

    let sclock = s.clockwise();

    let num = dot_product(sclock, r);
    let den = dot_product(s, r);

    phi_inf(Fraction::new(num, den)) 
}

// tight contact structures
// Theorem 1.2: r = a/b > pq
fn surgery_above_pq(qp: Fraction, r: Fraction) -> i64 {
    let (p, q) = (qp.den, qp.num);
    let (a, b) = (r.num, r.den);

    // negative torus knots
    if q < 0 {
        // left-handed trefoil
        if p == 2 && q == -3 {        
            // 0-surgery will be handled by the wrapper

            let n = Fraction::new(b, a).ceiling();
            if n <= 1 {         // a/b notin [0,1)
                return qp.n() * phi_inf(r)
            } else {            // a/b in (0,1): add non-thickenable structures
                let phi_total: i64 = (1..=(n-1))
                    .map(|k| phi_s(r, Fraction::new(1, k)))
                    .sum();
                return qp.n() * phi_inf(r) + phi_total  
            }
        }

        // non LHT
        if a == 0 {     // 0-surgery
            return qp.n() * phi_inf(r)
        }

        // check whether a/b is in J_k = [e_k^a, e_k) for some k
        let e = p.abs() * q.abs() - p.abs() - q.abs();
        let k = Fraction::new(e * b, a).ceiling() - 1; // e_k is the closest one to a/b

        // a/b < 0 or a/b > |pq|-|p|-|q| 
        if k <= 0 {
            return qp.n() * phi_inf(r)
        }

        // e and k rel prime => non-thickenable 
        if gcd(e, k) == 1 {
            let ek = Fraction::new(e, k);
            let ea =  ek.anti_clockwise();

            // a/b in J_k
            if b * ea.num <= a * ea.den {       // e_k^a <= a/b
                qp.n() * phi_inf(r) + phi_s(r, ek)
            } else {
                qp.n() * phi_inf(r)
            }
        // e and k not rel prime, then no non-thickenable
        } else {                
            qp.n() * phi_inf(r)
        }
    // positive torus knots: easy
    } else {
        qp.n() * phi_inf(r)
    }
}

// Theorem 1.2: pq-1 <= r < pq
fn surgery_above_pq_1(qp: Fraction, r: Fraction) -> i64 {
    let (p, q) = (qp.den, qp.num);

    let m = qp.m();
    let n = qp.n();

    let l = Fraction::new(p*q,1);

    (m - 2 * n) * phi_s(r, l) + n * phi_inf(r)
}

//fn surgery_below_pq_1(p: i64, q: i64, a: i64, b: i64) -> i64 {
//    return -2
//}

#[wasm_bindgen]
pub fn surgery(p: i64, q: i64, a: i64, b: i64) -> Result<i64, JsValue> {
    if p == 0 || q == 0 {
        let msg = format!(" Enter a non-trivial torus knot!");
        return Err(JsValue::from_str(&msg));
    }

    let qp = Fraction::new_torus(q,p);
    let r = Fraction::new(a, b);
    let (p, q) = (qp.den, qp.num);
    let (a, b) = (r.num, r.den);
    let pq = p*q;

    if p == 1{
        let msg = format!("({},{})-torus knot is an unknot. Enter a non-trivial torus knot!",p,q);

        return Err(JsValue::from_str(&msg));
    }

    // r = infinity => S^3
    if b == 0 {
        Ok(1)
    } // 0-surgery on trefoils
    else if (qp == Fraction::new_torus(3,2) || qp == Fraction::new_torus(-3,2)) && r==0 {
        Ok(-1)
    } else if r >= pq {
        Ok(surgery_above_pq(qp, r))
    } else if r >= pq - 1 && r < pq {
        Ok(surgery_above_pq_1(qp, r))
    } else {
        Ok(-2)
    }
}




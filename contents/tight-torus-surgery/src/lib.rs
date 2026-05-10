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

    fn to_cf_pos(&self) -> ContinuedFraction {
        let negate = self.negate();
        let terms = negate.to_cf().terms.iter()
            .map(|x| -x) 
            .collect();

        ContinuedFraction { terms }
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

    fn floor(&self) -> i64 {
    if self.num >= 0 {
        self.num / self.den
    } else {
        (self.num - self.den + 1) / self.den
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
            f.negate()
        }
    }

    fn negate(&self) -> Fraction {
        Fraction::new(-self.num,self.den)
    }

    fn jumps(&self) -> Vec<Fraction> {
        let cf = self.to_cf();
        cf.jumps()
    }

    fn jumps_pos(&self) -> Vec<Fraction> {
        let cf = self.negate().to_cf();
        cf.jumps_pos()
    }

    fn gaps(&self) -> Vec<i64> {
        let jumps = self.jumps();

        let valleys: Vec<Fraction> = jumps[..jumps.len()-1]
            .windows(2)
            .map(|pair| farey_sum(pair[0],  pair[1]))
            .collect();

        valleys.into_iter()
            .map(|s| dot_product(*self, s).abs()) 
            .collect() 
    }

    fn gaps_pos(&self) -> Vec<i64> {
        let jumps = self.jumps_pos();

        let valleys: Vec<Fraction> = jumps[..jumps.len()]
            .windows(2)
            .map(|pair| farey_sum(pair[0],  pair[1]))
            .collect();

        valleys.into_iter()
            .map(|s| dot_product(*self, s).abs()) 
            .collect() 
    }

    fn tight_gaps(&self) -> Vec<i64> {
        let ceil = self.ceiling();
        let floor = self.floor(); 

        let jump_right = dot_product(*self, Fraction::new(ceil,1)).abs();
        let jump_left = dot_product(*self, Fraction::new(floor,1)).abs();

        let peaks = 2 * ceil.abs(); 
        let n = (peaks - 1) as usize;

        let gaps: Vec<i64> = [jump_right, jump_left].iter()
            .cycle()        
            .take(n)        
            .cloned()       
            .collect();     // 벡터로 수집
        gaps
    }

    fn block_lengths(&self) -> Vec<i64> {
        let mut jumps = self.jumps();
        jumps.insert(0,*self);

        let mut result: Vec<i64> = jumps.iter()          
            .zip(jumps.iter().skip(2))              
            .map(|(a, b)| dot_product(*a,*b).abs())                    
            .collect();
        result.push(self.ceiling().abs()-1);
        result
    }

    fn block_lengths_pos(&self) -> Vec<i64> {
        let mut jumps = self.jumps_pos();
        jumps.insert(0,*self);

        let mut result: Vec<i64> = jumps.iter()          
            .zip(jumps.iter().skip(2))              
            .map(|(a, b)| dot_product(*a,*b).abs())                    
            .collect();
        result
    }

    fn peaks(&self) -> Vec<i64> {
        let mut block_lengths = self.block_lengths();
        let last = block_lengths.pop().unwrap(); 
        let mut suffix_prod = last + 1;

        let mut results: Vec<i64> = block_lengths.into_iter().rev()
            .map(|x| {
                let res = x * suffix_prod;
                suffix_prod *= x + 1;
                res
            })
            .collect();
        results.reverse();
        results
    }

    fn peaks_pos(&self) -> Vec<i64> {
        let block_lengths = self.block_lengths_pos();
        let mut suffix_prod = 1;

        let mut results: Vec<i64> = block_lengths.into_iter().rev()
            .map(|x| {
                let res = x * suffix_prod;
                suffix_prod *= x + 1;
                res
            })
            .collect();
        results.reverse();
        results.push(1);
        results
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

    fn to_partial_f(&self, k: usize) -> Fraction {
        if self.terms.is_empty() {
            panic!("Cannot convert an empty ContinuedFraction to a Fraction!");
        }
        vec_to_f(&self.terms[0..k],0)
    }

    fn jumps(&self) -> Vec<Fraction> {
        let n = self.terms.len();
        let mut a_left: Vec<Fraction> = (1..n)
            .rev()
            .filter(|&i| i == 1 || self.terms[i] != -2) // Find the entry that is not -2
            .map(|i| vec_to_f(&self.terms[0..i],0)) // Calculate fraction right before that entry 
            .collect();

        let mut b_right: Vec<Fraction> = (1..n)
            .rev()
            .filter(|&i| {i==1 || self.terms[i - 1] != -2})
            .map(|i| vec_to_f(&self.terms[0..i], -1)) 
            .collect();

        if self.terms[n-1] != -2 {      // Start from A_1
            let last_a = if a_left.len() > b_right.len() {
                a_left.pop()
            } else {
                None
            };

            let mut combined: Vec<Fraction> = a_left.into_iter()
                .zip(b_right.into_iter())
                .flat_map(|(a, b)| [a, b])
                .collect();

            if let Some(extra) = last_a {
                combined.push(extra)
            }
            combined 
        } else {                         // Start from B_1
            let last_b = if a_left.len() < b_right.len() {
                b_right.pop()
            } else {
                None
            };

            let mut combined: Vec<Fraction> = b_right.into_iter()
                .zip(a_left.into_iter())
                .flat_map(|(b, a)| [b, a])
                .collect();

            if let Some(extra) = last_b {
                combined.push(extra)
            }
            combined
        }
    }

    fn jumps_pos(&self) -> Vec<Fraction> {
        let n = self.terms.len();
        let mut a_left: Vec<Fraction> = (1..n)
            .rev()
            .filter(|&i| self.terms[i] != -2) // Find the entry that is not -2
            .map(|i| vec_to_f(&self.terms[0..i],0)) // Calculate fraction right before that entry 
            .collect();
        a_left.push(Fraction::new(1,0));

        let mut b_right: Vec<Fraction> = (1..n)
            .rev()
            .filter(|&i| {i==1 || self.terms[i - 1] != -2})
            .map(|i| vec_to_f(&self.terms[0..i], -1)) 
            .collect();

        if self.terms[n-1] != -2 {      // Start from A_1
            let last_a = if a_left.len() > b_right.len() {
                a_left.pop()
            } else {
                None
            };

            let mut combined: Vec<Fraction> = a_left.into_iter()
                .zip(b_right.into_iter())
                .flat_map(|(a, b)| [a, b])
                .collect();

            if let Some(extra) = last_a {
                combined.push(extra);

                return  combined.iter()
                .map(|x| Fraction::new(-x.num,x.den))
                .collect()
            }
            combined.iter()
                .map(|x| Fraction::new(-x.num,x.den))
                .collect() 
        } else {                         // Start from B_1
            let last_b = if a_left.len() < b_right.len() {
                b_right.pop()
            } else {
                None
            };

            let mut combined: Vec<Fraction> = b_right.into_iter()
                .zip(a_left.into_iter())
                .flat_map(|(b, a)| [b, a])
                .collect();

            if let Some(extra) = last_b {
                combined.push(extra);

                return combined.iter()
                .map(|x| Fraction::new(-x.num,x.den))
                .collect()
            }
            combined.iter()
                .map(|x| Fraction::new(-x.num,x.den))
                .collect()
        }
    }

    fn negate(&self) -> ContinuedFraction {
        let terms = self.terms.iter()
        .map(|x| -x)
        .collect();
        
        ContinuedFraction { terms }
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

fn farey_sum(r: Fraction, s: Fraction) -> Fraction {
    let (a, b) = (r.num, r.den);
    let (c, d) = (s.num, s.den);

    Fraction::new(a+c,b+d)
}

fn vec_to_f(terms: &[i64], n: i64) -> Fraction {
    if terms.is_empty() {
        panic!("Cannot convert an empty ContinuedFraction to a Fraction!");
    } 

    let mut num: i64 = 1;
    let mut den: i64 = -n;

    // inverse Euclidean algorithm
    for &term in terms.iter().rev() {
        let old_num = num;
        num = term * num + den;
        den = -old_num;
    }
    num = -num.abs();
    den = den.abs();
    Fraction::new(num, den)
}

fn fractions_to_tuples(v: Vec<Fraction>) -> Vec<(i64,i64)> {
    let results = v.iter()
        .map(|x| (x.num,x.den))
        .collect();
    results
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
        panic!("phi_s: s = {}/{} should be larger than r = {}/{}!", s.num,s.den,r.num,r.den);
    }

    let sclock = s.clockwise();

    let num = dot_product(sclock, r);
    let den = dot_product(s, r);

    phi_inf(Fraction::new(num, den)) 
}

fn pos_cont_surgery(r: Fraction) -> i64 {
    let (a, b) = (r.num, r.den);
    let k = Fraction::new(b, a).ceiling();

    if a == 1 {
        return 1
    }

    let neg_coeff = Fraction::new(a, b- a * k);
    let cf = neg_coeff.to_cf(); 
    let calculate = |terms: &[i64]| -> i64 {
            let (first, rest) = terms.split_first()
                .expect("The continued fraction is empty!");
            rest.iter().map(|x| x.abs() - 1).product::<i64>() * first.abs()
        };
    let result = calculate(&cf.terms);
    result
}

// tight contact structures
// Theorem 1.2: r = a/b > pq
fn surgery_above_pq(qp: Fraction, r: Fraction) -> (i64, i64, i64, Vec<Fraction>) {
    let (p, q) = (qp.den, qp.num);
    let (a, b) = (r.num, r.den);

    let mut non_loose = 0;
    let mut tight = 0;
    let mut non_thickenable = 0;

    let jumps = qp.jumps();


    // negative torus knots
    if q < 0 {
        // left-handed trefoil
        if p == 2 && q == -3 {        
            // 0-surgery will be handled by the wrapper

            let n = Fraction::new(b, a).ceiling();
            if n <= 1 {         // a/b notin [0,1)
                non_loose = qp.n() * phi_inf(r);
                return (non_loose, tight, non_thickenable, jumps)
            } else {            // a/b in (0,1): add non-thickenable structures
                let phi_total: i64 = (1..=(n-1))
                    .map(|k| phi_s(r, Fraction::new(1, k)))
                    .sum();
                non_loose = qp.n() * phi_inf(r);
                non_thickenable = phi_total;
                return (non_loose, tight, non_thickenable, jumps)
            }
        }

        // non LHT
        if a == 0 {     // 0-surgery
            non_loose = qp.n() * phi_inf(r);
            return (non_loose, tight, non_thickenable, jumps)
        }

        // check whether a/b is in J_k = [e_k^a, e_k) for some k
        let e = p.abs() * q.abs() - p.abs() - q.abs();
        let k = Fraction::new(e * b, a).ceiling() - 1; // e_k is the closest one to a/b

        // a/b < 0 or a/b > |pq|-|p|-|q| 
        if k <= 0 {
            non_loose = qp.n() * phi_inf(r);
            return (non_loose, tight, non_thickenable, jumps)
        }

        // e and k rel prime => non-thickenable 
        if gcd(e, k) == 1 {
            let ek = Fraction::new(e, k);
            let ea =  ek.anti_clockwise();

            // a/b in J_k
            if b * ea.num <= a * ea.den {       // e_k^a <= a/b
                non_loose = qp.n() * phi_inf(r);
                non_thickenable = phi_s(r, ek);
                (non_loose, tight, non_thickenable, jumps)

            } else {
                non_loose = qp.n() * phi_inf(r);
                (non_loose, tight, non_thickenable, jumps)
            }
        // e and k not rel prime, then no non-thickenable
        } else {                
            non_loose = qp.n() * phi_inf(r);
            (non_loose, tight, non_thickenable, jumps)
        }
    // positive torus knots: easy
    } else {
        non_loose = qp.n() * phi_inf(r);
        (non_loose, tight, non_thickenable, jumps)
    }
}

// Theorem 1.2: pq-1 <= r < pq
fn surgery_above_pq_1(qp: Fraction, r: Fraction) -> (i64, i64, i64, Vec<Fraction>) {
    let (p, q) = (qp.den, qp.num);

    let m = qp.m();
    let n = qp.n();

    let s = Fraction::new(p*q,1);

    let mut non_loose = 0;
    let tight = 0;
    let non_thickenable = 0;
    let jumps = qp.jumps();

    non_loose = (m - 2 * n) * phi_s(r, s) + n * phi_inf(r);
    (non_loose, tight, non_thickenable, jumps)
}

fn surgery_below_pq(qp: Fraction, r: Fraction) -> (i64, i64, i64, Vec<Fraction>) {
    let (p, q) = (qp.den, qp.num);
    let (a, b) = (r.num, r.den);

    let m = qp.m();
    let n = qp.n();

    let ceil = r.ceiling();
    let floor = r.floor();

    let pq = p * q;
    let rel_tb = pq - floor - 1;
    
    let mut non_loose = 0; 
    let mut tight = 0;
    let mut non_thickenable = 0;
    
    if q < 0 {      // negative torus knots
        let jumps = qp.jumps();
        let peaks = qp.peaks();
        let max_gaps = qp.gaps();
        let mut gaps: Vec<i64> = max_gaps.iter()
            .map(|x| ((x - rel_tb - 1) + (x-rel_tb - 1).abs()) / 2)
            .collect(); 
        gaps.insert(0,0);

        let width: Vec<i64> = std::iter::once(1)           
            .chain(max_gaps.iter().map(|&g| g))             
            .collect();

        let mut cumulative_width = 0;
        let mut cumulative_gap = 0;

        let non_loose: i64 = peaks.iter().enumerate()
            .map(|(i, &p_current)| {
                cumulative_width += width[i];
                cumulative_gap += gaps[i];

                if i < peaks.len() - 1 {
                    let p_next = peaks[i + 1];
                    (p_current - p_next) * (cumulative_width - cumulative_gap) * 2
                } else {
                    p_current * (cumulative_width - cumulative_gap) * 2
                }
            })
            .sum();
        
        let tight_max_gaps = qp.tight_gaps();
        let tight_initial_width = 1 + tight_max_gaps.iter().sum::<i64>();
        let tight_gaps: i64 = tight_max_gaps.iter()
            .map(|x| ((x - rel_tb - 1) + (x-rel_tb - 1).abs()) / 2)
            .sum(); 

        let tight_width = tight_initial_width + rel_tb;

        let tight = tight_width - tight_gaps;

        if r.den != 1 {
            let x_num = qp.n();
            let wings = non_loose - 2 * qp.n();
            (wings * phi_s(r,Fraction::new(ceil,1)) + x_num * phi_inf(r), tight * phi_s(r,Fraction::new(ceil,1)), non_thickenable, jumps) 
        } else {
            (non_loose - qp.n(), tight, non_thickenable, jumps) 
        }
    } else {       // positive torus knots
        let jumps = qp.jumps_pos();
        let mut peaks = qp.peaks_pos();
        peaks.pop();
        let truncated_peaks: Vec<i64> = peaks.iter().enumerate()
            .map(|(i, x)| {
                if i == 0 { x - 2 } else { x - 1 }      // exclude V, and X from tight
            })
            .collect();

        let x_num = truncated_peaks[0];

        let max_gaps = qp.gaps_pos();
        let mut gaps: Vec<i64> = max_gaps.iter()
            .map(|x| ((x - rel_tb - 1) + (x-rel_tb - 1).abs()) / 2)
            .collect(); 
        gaps.insert(0,0);

        let width: Vec<i64> = std::iter::once(1)           
            .chain(max_gaps.iter().map(|&g| g))             
            .collect();

        let mut cumulative_width = 0;
        let mut cumulative_gap = 0;

        let x_non_loose: i64 = truncated_peaks.iter().enumerate()
            .map(|(i, &p_current)| {
                cumulative_width += width[i];
                cumulative_gap += gaps[i];

                if i < truncated_peaks.len() - 1 {
                    let p_next = truncated_peaks[i + 1];
                    (p_current - p_next) * (cumulative_width - cumulative_gap) * 2
                } else {
                    p_current * (cumulative_width - cumulative_gap) * 2
                }
            }).sum();

        if r >= pq - p - q + 2 {             // should consider V
            let v_max_gap = q - p;          // gap of innermost V
            let v_gap = ((v_max_gap - rel_tb - 1) + (v_max_gap-rel_tb - 1).abs()) / 2;
            let v_cumulative_gap = (cumulative_gap + gaps[gaps.len()-1]) * 2 + v_gap; 

            let v_max_width =  p + q - 1;       // peak - verex of V + 1: pq - (pq - p - q + 2) + 1
            let v_width = ((v_max_width - rel_tb) + (v_max_width - rel_tb).abs()) / 2;
            let v_non_loose = v_width - v_cumulative_gap;

            non_loose = x_non_loose + v_non_loose; 

            if r.den != 1 {
                let wings = non_loose - 2 * x_num - 2;          // count only wings, this is non-loose - X * 2 (/ and \) - 2 (V)
                return (wings * phi_s(r,Fraction::new(ceil,1)) + x_num * phi_inf(r) + 2 * phi_inf(r), tight * phi_s(r,Fraction::new(ceil,1)), non_thickenable, jumps) 
            } else {
                return (non_loose - x_num, tight, non_thickenable, jumps) 
            }
        } else if r < pq - p - q + 2 && r > pq - p - q {             // no V but should consider positive contact surgery 
            non_loose = x_non_loose;
            if r.den != 1 {
                let wings = non_loose - 2 * x_num;              // count only wings, this is non-loose - X * 2 (/ and \) 
                return (wings * phi_s(r,Fraction::new(ceil,1)) + x_num * phi_inf(r) + pos_cont_surgery(Fraction::new(a - b * (pq - p - q),b)), tight * phi_s(r,Fraction::new(ceil,1)), non_thickenable, jumps) 
            } else {
                return (non_loose - x_num + 1, tight, non_thickenable, jumps) 
            }

        } else if r <= pq - p - q && r > 0 {       // should consider non-thickenable
            let non_loose = x_non_loose;
            let max_tb = pq - p - q;
            let tight = max_tb - floor;   
            let mut non_thickenable = 0;

            // right-handed trefoil r in (0,1)
            if p == 2 && q == 3 && r < 1 {        
            // 0-surgery will be handled by the wrapper
                let n = Fraction::new(b, a).ceiling();
                if n <= 2 {         // a/b in [1/2,1)
                    let tight = phi_s(r, Fraction::new(1,1));
                    return (0, tight, 0, jumps)
                } else {            // a/b in (0,1/2): add non-thickenable structures
                    let phi_total: i64 = (2..=(n-1))
                        .map(|k| phi_s(r, Fraction::new(1, k)))
                        .sum();
                    let tight = phi_s(r,Fraction::new(1,1));
                    non_thickenable = phi_total;
                    return (0, tight, non_thickenable, jumps)
                }
            }

            // check whether a/b is in J_k = [e_k^a, e_k) for some k >= 2
            let e = p * q - p - q;
            let k = Fraction::new(e * b, a).ceiling() - 1; // e_k is the closest one to a/b

            // a/b < 0 or a/b > (pq-p-q)/2 
            if k <= 1 {
                non_thickenable = 0;
            }

            // e and k rel prime => non-thickenable 
            else if gcd(e, k) == 1 {
                let ek = Fraction::new(e, k);
                let ea =  ek.anti_clockwise();

                // a/b in J_k
                if b * ea.num <= a * ea.den {       // e_k^a <= a/b
                    non_thickenable = phi_s(r, ek);
                } else {
                    non_thickenable = 0;
                }
            // e and k not rel prime, then no non-thickenable
            } else {                
                non_thickenable = 0;
            }

            if r.den != 1 {
                let wings = non_loose - 2 * x_num;
                return (wings * phi_s(r,Fraction::new(ceil,1)) + x_num * phi_inf(r), tight * phi_s(r,Fraction::new(ceil,1)), non_thickenable, jumps) 
            } else {
                return (non_loose - x_num, tight, non_thickenable, jumps) 
            }
        } else {
            let non_loose = x_non_loose;
            let max_tb = pq - p - q;
            let tight = max_tb - floor;
            let non_thickenable = 0;
            if r.den != 1 {
                let wings = non_loose - 2 * x_num;
                return (wings * phi_s(r,Fraction::new(ceil,1)) + x_num * phi_inf(r),tight * phi_s(r,Fraction::new(ceil,1)), non_thickenable, jumps) 
            } else {
                return (non_loose - x_num, tight, non_thickenable, jumps) 
            }
        } 
    }
}

#[wasm_bindgen]
pub fn surgery(p: i64, q: i64, a: i64, b: i64) -> Result<Vec<i64>, JsValue> {
    if gcd(p, q) != 1 {
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
        Ok( vec![0,1,0] )
    } // 0-surgery on trefoils
    else if (qp == Fraction::new_torus(3,2) || qp == Fraction::new_torus(-3,2)) && r==0 {
        Ok( vec![-1,0,0] )
    } else if r >= pq {
        let result = surgery_above_pq(qp, r);
        let non_loose = result.0;
        let tight = result.1;
        let non_thickenable = result.2;
        let jumps = fractions_to_tuples(result.3);

        let mut surgery = vec![];
        surgery.push(non_loose);
        surgery.push(tight);
        surgery.push(non_thickenable);
        Ok( surgery )
    }  
    /* else if r > pq - 1 && r < pq {
        let result = surgery_above_pq_1(qp, r);
        let non_loose = result.0;
        let tight = result.1;
        let non_thickenable = result.2;
        let jumps = fractions_to_tuples(result.3);

        let mut surgery = vec![];
        surgery.push(non_loose);
        surgery.push(tight);
        surgery.push(non_thickenable);
        Ok( surgery )
    } */ 
    else {
        let result = surgery_below_pq(qp, r);
        let non_loose = result.0;
        let tight = result.1;
        let non_thickenable = result.2;
        let jumps = fractions_to_tuples(result.3);

        let mut surgery = vec![];
        surgery.push(non_loose);
        surgery.push(tight);
        surgery.push(non_thickenable);
        Ok( surgery )
    }
}
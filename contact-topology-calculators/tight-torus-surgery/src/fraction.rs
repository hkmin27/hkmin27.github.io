// fraction.rs
use std::cmp::Ordering;
use std::mem::swap;
use crate::continued_fraction::*;
use crate::utils::*;
use std::ops::{Add, Sub};


#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub struct Fraction {
    pub num: i64,        //q     
    pub den: i64,        //p
}

impl Fraction {
    // default constructor: simplifies the fraction and ensures a positive denominator 
    pub fn new(mut num: i64, mut den: i64) -> Self {
        assert!(den != 0 || num != 0, "0/0 is not allowed.");

        if den == 0 { return Self::INF }    // n/0 = INF
        if num == 0 { return Self::ZERO }   // 0/n = ZERO

        // make p and q are relatively prime
        let g = gcd(num.abs(), den.abs());
        if g != 1 {
            num /= g;
            den /= g; 
        }

        // ensure only the numerator can be negative
        if den < 0 {
            num = -num;
            den = -den;
        }

        Self { num, den }
    }

    // torus knot constructor: enforces relative prime, non-zero denominator, and |q| > |p|
    pub fn new_torus(mut num: i64, mut den: i64) -> Self {
        assert!(den != 0 && num != 0, "Enter a non-trivial torus knot!");
        assert!(gcd(num, den) == 1, "({}, {}) are not relatively prime", num, den);
        
        // swap if |p| > |q| 
        if num.abs() < den.abs() {
            swap(&mut num, &mut den);
        }

        // ensure only the numerator can be negative
        if den < 0 {
            num = -num;
            den = -den;
        }

        Self { num, den }
    }

    fn from_integer(n: i64) -> Self { Self { num: n, den: 1 } }

    pub const ZERO: Self = Self { num: 0, den: 1 };
    pub const INF: Self = Self { num: 1, den: 0 };
    pub const ONE: Self = Self { num: 1, den: 1 };

    pub fn is_zero(&self) -> bool { self.num == 0 && self.den != 0 }
    pub fn is_inf(&self) -> bool { self.den == 0 }
    pub fn is_negative(&self) -> bool { self.num < 0 }
    pub fn is_positive(&self) -> bool { self.num > 0 }
    pub fn is_integer(&self) -> bool { self.den == 1 }
    pub fn is_unit(&self) -> bool { self.num == 1 || self.num == -1 }

    pub fn inv(&self) -> Self { Self::new(self.den, self.num) }
    pub fn unit(n: i64) -> Self { Self::new(1, n) } 

    pub fn ceiling(&self) -> i64 {
        if self.num <= 0 { self.num / self.den } 
        else { (self.den + self.num - 1) / self.den }
    }

    pub fn floor(&self) -> i64 { self.num.div_euclid(self.den) }

    pub fn negate(&self) -> Fraction { Self::new(-self.num,self.den) }

    // contact topology
    // Fraction to ContinuedFraction (neg cf)
    pub fn to_cf(&self) -> ContinuedFraction {
        let mut num = self.num;
        let mut den = self.den;
        let mut cf = Vec::new();

        // apply the Euclidean algorithm
        // q/p < 0: e.g. -3/2 = [-2,-2]
        if self.is_negative() { 
            while den != 0 {
                let r = num.rem_euclid(den);
                let q = num.div_euclid(den);

                cf.push(q);
                num = -den;
                den = r;
            }
        }
        // q/p > 0: e.g. 3/2 = [2,2]; find cf of -q/p and then negate 
        else {
            num = self.negate().num;
            // den = self.negate().den;     // denominator is always positive

            while den != 0 {
                let r = num.rem_euclid(den);
                let q = num.div_euclid(den);

                cf.push(q.abs());     // negate and then push
                num = -den;
                den = r;
            }
        }

        cf 
    }

    // ContinuedFraction for path1 
    fn to_cf_path1(&self) -> ContinuedFraction {
        // q/p < 0 -> get cf
        if self.is_negative() {
            return self.to_cf()
        }

        // q/p > 0 -> get cf of (p/q-1)^-1
        let f = Self::new_torus(self.num, self.den - self.num);
        f.to_cf()
    }

    // ContinuedFraction for path2
    fn to_cf_path2(&self) -> ContinuedFraction {
        // cf of (q/p - ceil(q/p))^-1
        let f = Self::new_torus(self.den, self.num - self.den * self.ceiling());
        f.to_cf()
    }

    // m(p,q) = solid tori
    pub fn m(&self) -> i64 {
        let calculate = |terms: &[i64]| -> i64 {
            let (last, rest) = terms.split_last()
                .expect("The continued fraction is empty!");
            rest.iter().map(|x| x.abs() - 1).product::<i64>() * last.abs()
        };

        let a = calculate(&self.to_cf_path1());
        let b = calculate(&self.to_cf_path2());

        a * b
    } 

    // n(p,q) = lens
    pub fn n(&self) -> i64 {
        let calculate = |terms: &[i64]| -> i64 {
            terms.iter().map(|x| x.abs() - 1).product()
        };

        let a = calculate(&self.to_cf_path1());
        let b = calculate(&self.to_cf_path2());

        a * b
    } 

    // (q/p)^c
    pub fn clockwise(&self) -> Self {
        if self.is_zero() { return Self::INF } 
        if self.is_inf() { return Self::ZERO }

        // q/p < 0 
        if self.is_negative() {
            if  self.is_unit() { return Self::ZERO }  // (-1/n)^c = 0 
            
            let mut cf = self.to_cf();
            if let Some(last) = cf.last_mut() {
                *last += 1; 
            }
            return cf.to_f()
        }

        // q/p > 0
        if self.is_integer() { return Fraction::INF }     // n^c = infinity                             

        let frac = Self::new(-self.num, self.den);
        let mut cf = frac.to_cf();
        cf.pop();
        let f = cf.to_f();

        Self::new(-f.num,f.den)
    }

    // (q/p)^a
    pub fn anti_clockwise(&self) -> Self {
        if self.is_zero() { return Self::INF } 
        if self.is_inf() { return Self::ZERO }
        
        // q/p < 0
        if self.is_negative() {              
            if self.is_integer() { return Self::INF; } // (-n)^a = infinity

            let mut cf = self.to_cf();
            cf.pop();
            return cf.to_f()
        }

        // q/p > 0
        if self.is_unit() { return Self::ZERO }     // (1/n)^a = 0

        let mut cf = self.to_cf();

        if let Some(last) = cf.last_mut() {
            *last -= 1; 
        }
        cf.to_f()
    }

    pub fn jumps(&self) -> Vec<Fraction> {
        self.to_cf().jumps()
    }

    // gaps for peaks of non-loose knots
    pub fn gaps(&self, jumps: &[Fraction]) -> Vec<i64> {
        // q/p < 0
        let end = if self.is_negative() { jumps.len().saturating_sub(1) }
            else { jumps.len() };

        // Find second to the endpoint of A_i & B_i's and dot q/p -> gaps of each valley 
        jumps[..end]
            .windows(2)
            .map(|pair| farey_sum(pair[0],  pair[1]))
            .map(|s| dot_product(*self, s).abs()) 
            .collect()
    }

    // gaps for peaks of tight negative torus knots
    pub fn tight_gaps(&self) -> Vec<i64> {
        let ceil = self.ceiling();
        let floor = self.floor(); 

        let jump_right = dot_product(*self, Fraction::from(ceil)).abs();
        let jump_left = dot_product(*self, Fraction::from(floor)).abs();

        let peaks = 2 * ceil.abs(); 
        let n = (peaks - 1) as usize;

        let gaps: Vec<i64> = [jump_right, jump_left].iter()
            .cycle()        
            .take(n)        
            .cloned()       
            .collect();     // 벡터로 수집
        gaps
    }

    // find the length of each continued fraction blocks for q/p
    pub fn block_lengths(&self, jumps: &[Fraction]) -> Vec<i64> {
        // insert s_0 = q/p in front of the jumps
        // now [q/p, s_1, s_2, s_3, ....]
        // return [q/p.s2, s1.s3, s2.s4, ...]
        std::iter::once(*self)
            .chain(jumps.iter().copied())
            .zip(jumps.iter().skip(1).copied())
            .map(|(a, b)| dot_product(a, b).abs())
            // add (|ceil(q/p)| - 1) if q/p < 0
            .chain(self.is_negative().then(|| self.ceiling().abs() - 1))
            .collect()
    }

    // find the number of each peaks
    pub fn peaks(&self, jumps: &[Fraction]) -> Vec<i64> {
        // q/p < 0
        if self.is_negative() {
            let mut block_lengths = self.block_lengths(jumps);
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
        // q/p > 0
        else {
            let block_lengths = self.block_lengths(jumps);
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
}

// Ordering
// Fraction & Fraction 
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

// operator overloading
impl Add for Fraction {
    type Output = Self;

    fn add(self, rhs: Self) -> Self::Output {
        // 통분: (a * d) + (b * c) / (b * d)
        let new_num = self.num * rhs.den + self.den * rhs.num;
        let new_den = self.den * rhs.den;

        Fraction::new(new_num, new_den)
    }
}

impl Sub for Fraction {
    type Output = Self;

    fn sub(self, rhs: Self) -> Self::Output {
        // 통분: (a * d) - (b * c) / (b * d)
        let new_num = self.num * rhs.den - self.den * rhs.num;
        let new_den = self.den * rhs.den;

        Fraction::new(new_num, new_den)
    }
}

impl Add<i64> for Fraction {
    type Output = Self;

    fn add(self, rhs: i64) -> Self::Output {
        Fraction::new(self.num + self.den * rhs, self.den)
    }
}

impl Sub<i64> for Fraction {
    type Output = Self;

    fn sub(self, rhs: i64) -> Self::Output {
        Fraction::new(self.num - self.den * rhs, self.den)
    }
}

impl Add<Fraction> for i64 {
    type Output = Fraction;

    fn add(self, rhs: Fraction) -> Self::Output {
        rhs + self
    }
}

impl Sub<Fraction> for i64 {
    type Output = Fraction;

    fn sub(self, rhs: Fraction) -> Self::Output {
        // self를 self/1로 생각하고 통분: (self * rhs.den - rhs.num) / rhs.den
        Fraction::new(self * rhs.den - rhs.num, rhs.den)
    }
}

// Idiomatic Rust: Allows using `Fraction::from(5)` or `5.into()`
impl From<i64> for Fraction {
    fn from(n: i64) -> Self {
        Self::from_integer(n)
    }
}
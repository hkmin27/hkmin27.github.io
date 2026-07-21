// lens_spaces.rs

use crate::fraction::Fraction;
use crate::continued_fraction::ContinuedFraction;
use crate::utils::*;
use super::Manifold;

pub struct LensSpace {
    pub p: i64,
    pub q: i64,
}

impl LensSpace {
    pub fn new(p: i64, q: i64) -> Self {
        if p == 0 && q == 0 {
            panic!("L(0, 0) is not a valid lens space!");
        }   
        if p == 0 {
            // L(0, q) is diffeomorphic to S^1 x S^2, so we can set q = 1
            return Self { p: 0, q: 1 };
        }

        if q == 0 {
            // L(p, 0) is diffeomorphic to S^3, so we can set q = 1
            return Self { p: 1, q: 0 };
        }

        assert!(gcd(p, q) == 1, "p and q must be relatively prime!");

        // ensure p > 0. If p < 0, we can negate both p and q without changing the lens space.
        let (p, q) = if p < 0 { (-p, -q ) } else { (p, q) };

        // ensure 0 < q < p. 
        let q = q.rem_euclid(p);

        Self { p, q }
    }   
}   

// equality of lens spaces: L(p, q) = L(p', q') iff p = p' and q' ≡ ±q^±1 (mod p) 

impl Manifold for LensSpace {
    fn tight(&self) -> i64 {
        if self.p == 0 || self.p == 1 || self.q == 0 {
            // L(0, q) is diffeomorphic to S^1 x S^2, which has a unique tight contact structures
            // L(p, 0) is diffeomorphic to S^3, which has a unique tight contact structure
            // L(1, q) is diffeomorphic to S^3, which has a unique tight contact structure
            return 1;
        }

        let p_q = Fraction::new(self.p, self.q); 
        p_q.negate().to_cf().iter().map(|&a| a + 1).product::<i64>().abs()
    }
}

// implement equality of lens spaces
impl PartialEq for LensSpace {
    fn eq(&self, other: &Self) -> bool {
        // L(p, q) = L(p', q') iff p = p' and q' ≡ q^±1 (mod p) 
        self.p == other.p && (self.q == other.q || (self.q * other.q) % self.p == 1)
    }
}

pub fn tight_lens_space(p: i64, q: i64) -> i64 {
    let tight = LensSpace::new(p, q).tight();
    println!("The number of tight contact structures on L({}, {}) is {}.", p, q, tight);
    tight
}

// ---------------------------------------------------------
// tests 
#[cfg(test)]
mod tests {
    use super::*; 

    #[test]
    fn test_tight_lens_basic() {
        for p in 2..100 {
            assert_eq!(tight_lens_space(p, 1), p-1);
            assert_eq!(tight_lens_space(p, -1), 1);
        }

        for n in 1..100 {
            assert_eq!(tight_lens_space(2*n+1, 2*n-1), 1);
        }
    }

    #[test]
    fn test_diffeomorphic_lens() {
        assert_eq!(tight_lens_space(7,2),tight_lens_space(7,4)); 
        assert_eq!(tight_lens_space(7,3),tight_lens_space(7,5));
    }
}

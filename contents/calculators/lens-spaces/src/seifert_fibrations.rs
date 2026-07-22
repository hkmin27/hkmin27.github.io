// Seifert_fibrations.rs

use crate::fraction::Fraction;
use crate::continued_fraction::ContinuedFraction;
use crate::utils::*;
use super::Manifold;

pub struct SeifertFibration {
    pub e0: i64,
    pub exceptional_fibers: Vec<(i64, i64, i64)>,
}

impl Manifold for SeifertFibration {
    fn tight(&self) -> i64 
    {
        -2
    }
}

// lib.rs
use wasm_bindgen::prelude::*;
use crate::fraction::Fraction;
use crate::lens_spaces::LensSpace;
use crate::utils::*;

pub mod continued_fraction;
pub mod fraction;
pub mod lens_spaces;
pub mod torus_surgery;
pub mod seifert_fibrations;
pub mod utils;

pub trait Manifold {
    // returns the number of tight contact structures up to isotopy
    // -1: infinitely many
    // default: panic->not yet implemented
    fn tight(&self) -> i64;

    // convert the manifold to Seifert fibered space and return the Seifert invariants
    // if the manifod is not Seifert fibered, panic->not sfs
    //fn to_seifert(&self) -> SeifertFibration;
}

#[wasm_bindgen]
pub fn tight_lens_spaces(p: i64, q: i64) -> Result<i64, JsValue> {
    if p == 0 && q ==0 {
        let msg = format!("Enter relatively prime numbers p and q!");
        return Err(JsValue::from_str(&msg));
    }

   if p == 0 {
        // L(0, q) is diffeomorphic to S^1 x S^2
        return Ok(1);
    }

    if p == 1 {
        // L(1, q) is diffeomorphic to S^3
        return Ok(1);
        }

    if q == 0 {
        // L(p, 0) is diffeomorphic to S^3
        return Ok(1);
    }

    if gcd(p, q) != 1 {
        let msg = format!("Enter relatively prime numbers p and q!");
        return Err(JsValue::from_str(&msg));
    }

    let manifold = LensSpace::new(p, q);

    return Ok(manifold.tight());
    
}

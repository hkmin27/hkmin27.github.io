// lib.rs
use wasm_bindgen::prelude::*;
use crate::fraction::Fraction;
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
pub fn continued_fractions(p: i64, q: i64) -> Result<Vec<i64>, JsValue> {
    if q == 0 {
        let msg = format!("Enter valid p and q!");
        return Err(JsValue::from_str(&msg));
    }
    let frac = Fraction::new(p, q);

    let result = frac.to_cf();

    Ok(result)
}

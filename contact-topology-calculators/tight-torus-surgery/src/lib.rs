// lib.rs
use wasm_bindgen::prelude::*;
use crate::fraction::Fraction;
use crate::torus_surgery::TorusSurgery;
use crate::utils::*;

pub mod continued_fraction;
pub mod fraction;
pub mod torus_surgery;
pub mod utils;


pub trait Manifold {
    // returns the number of tight contact structures up to isotopy
    fn tight(&self) -> i64;

    // returns the number of symplectic fillings up to deformation equivalence 
    fn fillings(&self) -> i64;
}

#[wasm_bindgen]
pub fn tight_torus_surgery(p: i64, q: i64, a: i64, b: i64) -> Result<Vec<i64>, JsValue> {
    if gcd(p, q) != 1 {
        let msg = format!(" Enter a non-trivial torus knot!");
        return Err(JsValue::from_str(&msg));
    }

    let qp = Fraction::new_torus(q,p);
    let r = Fraction::new(a, b);

    let manifold = TorusSurgery::new(p, q, r);

    let (p, q) = (qp.den, qp.num);
    let (a, b) = (r.num, r.den);
    let pq = p*q;

    let (e_0, r1, r2, r3) = manifold.to_seifert_fibration();

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
        let result = manifold.surgery_above_pq();
        let non_loose = result.0;
        let tight = result.1;
        let non_thickenable = result.2;

        let neg_twisting = non_loose;
        let zero_twisting = 0;

        let mut surgery = vec![];
        surgery.push(non_loose);
        surgery.push(tight);
        surgery.push(non_thickenable);
        surgery.push(e_0);
        surgery.push(r1.num);
        surgery.push(r1.den);
        surgery.push(r2.num);
        surgery.push(r2.den);
        surgery.push(r3.num);
        surgery.push(r3.den);
        surgery.push(neg_twisting);
        surgery.push(zero_twisting);
        Ok( surgery )
    }  
    else if r > pq - 1 && r < pq {
        let result = manifold.surgery_above_pq_1();
        let non_loose = result.0;
        let tight = result.1;
        let non_thickenable = result.2;

        let neg_twisting = 0;
        let zero_twisting = non_loose + tight;

        let mut surgery = vec![];
        surgery.push(non_loose);
        surgery.push(tight);
        surgery.push(non_thickenable);
        surgery.push(e_0);
        surgery.push(r1.num);
        surgery.push(r1.den);
        surgery.push(r2.num);
        surgery.push(r2.den);
        surgery.push(r3.num);
        surgery.push(r3.den);
        surgery.push(neg_twisting);
        surgery.push(zero_twisting);
        Ok( surgery )
    }  
    else {
        let result = manifold.surgery_below_pq();
        let non_loose = result.0;
        let tight = result.1;
        let non_thickenable = result.2;

        let mut neg_twisting = 0;
        let mut zero_twisting = 0;

        if qp.is_negative() {
            neg_twisting = non_thickenable;
            zero_twisting = non_loose + tight;
        } else {
            neg_twisting = tight + non_thickenable;
            zero_twisting = non_loose;
        }

        let mut surgery = vec![];
        surgery.push(non_loose);
        surgery.push(tight);
        surgery.push(non_thickenable);
        surgery.push(e_0);
        surgery.push(r1.num);
        surgery.push(r1.den);
        surgery.push(r2.num);
        surgery.push(r2.den);
        surgery.push(r3.num);
        surgery.push(r3.den);
        surgery.push(neg_twisting);
        surgery.push(zero_twisting);
        Ok( surgery )
    }
}
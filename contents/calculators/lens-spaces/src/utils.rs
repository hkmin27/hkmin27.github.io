// utils.rs
use std::mem::swap;
use crate::fraction::Fraction;

pub fn gcd(a: i64, b: i64) -> i64 {
    let mut a = a;
    let mut b = b;

    while b != 0 {
        a %= b; 
        swap(&mut a, &mut b);
    }
    a.abs()     // gcd must be non-negative
}

pub fn dot_product(r: Fraction, s: Fraction) -> i64 {
    let (a, b) = (r.num, r.den);
    let (c, d) = (s.num, s.den);

    a * d  - b * c
} 

pub fn farey_sum(r: Fraction, s: Fraction) -> Fraction {
    let (a, b) = (r.num, r.den);
    let (c, d) = (s.num, s.den);

    Fraction::new(a+c,b+d)
}

pub fn fractions_to_tuples(v: Vec<Fraction>) -> Vec<(i64,i64)> {
    let results = v.iter()
        .map(|x| (x.num,x.den))
        .collect();
    results
}

// phi_infty(r), r = a/b
pub fn phi_inf(r: Fraction) -> i64 {
    let (a, b) = (r.num, r.den);

    // normalizing (a,b)
    let new_a = if a.rem_euclid(b) == 0 {
        1
    } else {
        a.rem_euclid(b)
    };

    // now find continued fraction for -b/a
    let f = Fraction::new_torus(-b, new_a);
    let terms = f.to_cf();

    let (first, rest) = terms.split_first()
        .expect("The continued fraction is empty!");
    rest.iter().map(|x| x.abs() - 1).product::<i64>() * first.abs()
}

// phi_s(r) r = a/b, s = c/d
// r < s
pub fn phi_s(r: Fraction, s: Fraction) -> i64 {       
    if r >= s {
        panic!("phi_s: s = {}/{} should be larger than r = {}/{}!", s.num,s.den,r.num,r.den);
    }

    let sclock = s.clockwise();

    let num = dot_product(sclock, r);
    let den = dot_product(s, r);

    phi_inf(Fraction::new(num, den)) 
}

// the number of stabilization choices for positive (p/q)-surgery
pub fn pos_cont_surgery(r: Fraction) -> i64 {
    let (a, b) = (r.num, r.den);
    let k = Fraction::new(b, a).ceiling();

    if a == 1 {
        return 1
    }

    let neg_coeff = Fraction::new(a, b - a * k);
    let cf = neg_coeff.to_cf(); 
    let calculate = |terms: &[i64]| -> i64 {
            let (first, rest) = terms.split_first()
                .expect("The continued fraction is empty!");
            rest.iter().map(|x| x.abs() - 1).product::<i64>() * first.abs()
        };
    let result = calculate(&cf);
    result
}
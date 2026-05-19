// surgery.rs
use crate::fraction::Fraction;
use crate::utils::*;
use std::mem::swap;

#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub struct TorusSurgery {
    p: i64,
    q: i64,
    r: Fraction,
}

impl TorusSurgery {
    pub fn new(mut p: i64, mut q: i64, r: Fraction) -> Self {
        assert!(p != 0 && q != 0, "Enter a non-trivial torus knot!");
        assert!(gcd(p, q) == 1, "({}, {}) are not relatively prime", p, q);
        
        // swap if |p| > |q| 
        if q.abs() < p.abs() {
            swap(&mut p, &mut q);
        }

        // ensure only the numerator can be negative
        if p < 0 {
            q = -q;
            p = -p;
        }
        
        Self { p, q, r } 
    }

    pub fn to_seifert_fibration(&self) -> (i64, Fraction, Fraction, Fraction) {
        let pq = self.p * self.q;

        let p = self.p.abs();
        let q = self.q.abs();
        let p_q = Fraction::new(q, p); 
        let clockwise = p_q.clockwise();
        let p_star = clockwise.num;
        let q_star = clockwise.den;
        let rel_surgery = self.r - pq; 

        let mut r1 = Fraction::ONE;
        let mut r2 = Fraction::ONE;

        // negative torus knots
        if pq < 0 {
            r1 = Fraction::new(p_star, q);
            r2 = Fraction::new(q_star, p);
        } // positive torus knots
        else {
            r1 = Fraction::new(q - p_star, q);
            r2 = Fraction::new(p - q_star, p);
        }

        if rel_surgery < -1 {
            let r3 = rel_surgery.inv().negate();
            return (-1,r1, r2, r3)
        } else if rel_surgery > 1 {
            let num = rel_surgery.num;
            let den = rel_surgery.den;
            let r3 = Fraction::new(num, den - num).inv().negate();
            return (-2, r1, r2, r3)
        } else {
            if rel_surgery.is_zero() || rel_surgery.is_unit() {
                // (connected sum of) lens spaces
                return (0, Fraction::INF, Fraction::INF, Fraction::INF)
            }

            let num = rel_surgery.num;
            let den = rel_surgery.den;

            let k = rel_surgery.inv().ceiling();
            let e0 = -1-k;
            let r3 = Fraction::new(num, den - num * k).inv().negate();
            return (e0, r1, r2, r3) 
        }
    }

    // tight contact structures
    // Theorem 1.2: r = a/b > pq
    pub fn surgery_above_pq(&self) -> (i64, i64, i64) {
        let r = self.r;
        let (p, q) = (self.p, self.q);
        let (a, b) = (r.num, r.den);
        let qp = Fraction::new(q, p);

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
                    return (non_loose, tight, non_thickenable)
                } else {            // a/b in (0,1): add non-thickenable structures
                    let phi_total: i64 = (1..=(n-1))
                        .map(|k| phi_s(r, Fraction::new(1, k)))
                        .sum();
                    non_loose = qp.n() * phi_inf(r);
                    non_thickenable = phi_total;
                    return (non_loose, tight, non_thickenable)
                }
            }

            // non LHT
            if a == 0 {     // 0-surgery
                non_loose = qp.n() * phi_inf(r);
                return (non_loose, tight, non_thickenable)
            }

            // check whether a/b is in J_k = [e_k^a, e_k) for some k
            let e = p.abs() * q.abs() - p.abs() - q.abs();
            let k = Fraction::new(e * b, a).ceiling() - 1; // e_k is the closest one to a/b

            // a/b < 0 or a/b > |pq|-|p|-|q| 
            if k <= 0 {
                non_loose = qp.n() * phi_inf(r);
                return (non_loose, tight, non_thickenable)
            }

            // e and k rel prime => non-thickenable 
            if gcd(e, k) == 1 {
                let ek = Fraction::new(e, k);
                let ea =  ek.anti_clockwise();

                // a/b in J_k
                if b * ea.num <= a * ea.den {       // e_k^a <= a/b
                    non_loose = qp.n() * phi_inf(r);
                    non_thickenable = phi_s(r, ek);
                    (non_loose, tight, non_thickenable)

                } else {
                    non_loose = qp.n() * phi_inf(r);
                    (non_loose, tight, non_thickenable)
                }
            // e and k not rel prime, then no non-thickenable
            } else {                
                non_loose = qp.n() * phi_inf(r);
                (non_loose, tight, non_thickenable)
            }
        // positive torus knots: easy
        } else {
            non_loose = qp.n() * phi_inf(r);
            (non_loose, tight, non_thickenable)
        }
    }

    // Theorem 1.2: pq-1 <= r < pq
    pub fn surgery_above_pq_1(&self) -> (i64, i64, i64) {
        let r = self.r;
        let qp = Fraction::new(self.q, self.p);
        let (p, q) = (self.p, self.q);

        let m_pq = qp.m();
        let n_pq = qp.n();

        let s = Fraction::from(p*q);
        let phi_sr = phi_s(r, s);

        // (m_pq - 2 * n_pq) * phi_s(r, s) + n_pq * phi_inf(r)
        if qp.is_negative() {
            let tight_peaks = 2 * qp.ceiling().abs();
            let non_loose =(m_pq - 2 * n_pq - tight_peaks) * phi_sr + n_pq * phi_inf(r);
            let tight = tight_peaks * phi_sr;

            (non_loose, tight, 0)
        } else {
            let non_loose =(m_pq - 2 * n_pq) * phi_sr + n_pq * phi_inf(r);
            let tight = 0;

            (non_loose, tight, 0)
        }
    }

    pub fn surgery_below_pq(&self) -> (i64, i64, i64) {
        let r = self.r;
        let qp = Fraction::new(self.q, self.p);
        let (p, q) = (self.p, self.q);
        let (a, b) = (r.num, r.den);

        let n_pq = qp.n();

        let ceil = r.ceiling();
        let floor = r.floor();

        let pq = p * q;
        let rel_tb = pq - floor - 1;
        
        let mut non_loose = 0; 
        let mut tight = 0;
        let mut non_thickenable = 0;
        
        if q < 0 {      // negative torus knots
            let jumps = qp.jumps();
            let peaks = qp.peaks(&jumps);
            let max_gaps = qp.gaps(&jumps);
            let gaps: Vec<i64> = std::iter::once(0)
                .chain(max_gaps.iter() 
                .map(|x| {
                    let val = x - rel_tb - 1; 
                    (val + val.abs()) / 2
                }))
                .collect(); 

    //        let width: Vec<i64> = std::iter::once(1)           
    //            .chain(max_gaps.iter().map(|&g| g))             
    //            .collect();

            let mut cumulative_width = 1;
            let mut cumulative_gap = 0;

            let non_loose: i64 = peaks.iter().enumerate()
                .map(|(i, &p_current)| {
                    if i != 0 { cumulative_width += max_gaps[i-1]; }
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
                let x_num = n_pq;
                let wings = non_loose - 2 * n_pq;
                (wings * phi_s(r,Fraction::from(ceil)) + x_num * phi_inf(r), tight * phi_s(r,Fraction::from(ceil)), non_thickenable) 
            } else {
                (non_loose - n_pq, tight, non_thickenable) 
            }
        } else {       // positive torus knots
            let jumps = qp.jumps();
            let mut peaks = qp.peaks(&jumps);
            peaks.pop();
            let truncated_peaks: Vec<i64> = peaks.iter().enumerate()
                .map(|(i, x)| {
                    if i == 0 { x - 2 } else { x - 1 }      // exclude V, and X from tight
                })
                .collect();

            let x_num = truncated_peaks[0];

            let max_gaps = qp.gaps(&jumps);
            let gaps: Vec<i64> = std::iter::once(0) // put 0 in front of gaps
                .chain(max_gaps.iter()
                .map(|&x| {
                    let val = x - rel_tb - 1;
                    (val + val.abs()) / 2
                }))
                .collect();

    //        let width: Vec<i64> = std::iter::once(1)           
    //            .chain(max_gaps.iter().map(|&g| g))             
    //            .collect();

            let mut cumulative_width = 1;
            let mut cumulative_gap = 0;

            let x_non_loose: i64 = truncated_peaks.iter().enumerate()
                .map(|(i, &p_current)| {
                    if i != 0 { cumulative_width += max_gaps[i-1]; }
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
                    return (wings * phi_s(r,Fraction::from(ceil)) + x_num * phi_inf(r) + 2 * phi_inf(r), tight * phi_s(r,Fraction::from(ceil)), non_thickenable) 
                } else {
                    return (non_loose - x_num, tight, non_thickenable) 
                }
            } else if r < pq - p - q + 2 && r > pq - p - q {             // no V but should consider positive contact surgery 
                non_loose = x_non_loose;
                if r.den != 1 {
                    let wings = non_loose - 2 * x_num;              // count only wings, this is non-loose - X * 2 (/ and \) 
                    return (wings * phi_s(r,Fraction::from(ceil)) + x_num * phi_inf(r) + pos_cont_surgery(Fraction::new(a - b * (pq - p - q),b)), tight * phi_s(r,Fraction::from(ceil)), non_thickenable) 
                } else {
                    return (non_loose - x_num + 1, tight, non_thickenable) 
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
                        let tight = phi_s(r, Fraction::ONE);
                        return (0, tight, 0)
                    } else {            // a/b in (0,1/2): add non-thickenable structures
                        let phi_total: i64 = (2..=(n-1))
                            .map(|k| phi_s(r, Fraction::new(1, k)))
                            .sum();
                        let tight = phi_s(r,Fraction::ONE);
                        non_thickenable = phi_total;
                        return (0, tight, non_thickenable)
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
                    return (wings * phi_s(r,Fraction::from(ceil)) + x_num * phi_inf(r), tight * phi_s(r,Fraction::from(ceil)), non_thickenable) 
                } else {
                    return (non_loose - x_num, tight, non_thickenable) 
                }
            } else {
                let non_loose = x_non_loose;
                let max_tb = pq - p - q;
                let tight = max_tb - floor;
                let non_thickenable = 0;
                if r.den != 1 {
                    let wings = non_loose - 2 * x_num;
                    return (wings * phi_s(r,Fraction::from(ceil)) + x_num * phi_inf(r),tight * phi_s(r,Fraction::from(ceil)), non_thickenable) 
                } else {
                    return (non_loose - x_num, tight, non_thickenable) 
                }
            } 
        }
    }
}


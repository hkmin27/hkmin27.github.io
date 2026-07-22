use crate::fraction::Fraction;

pub type ContinuedFraction = Vec<i64>;

pub trait ContinuedFractionExt {
    fn is_negative(&self) -> bool;
    fn is_positive(&self) -> bool;
    fn to_f(&self) -> Fraction;
    fn to_f_with(&self, n: i64) -> Fraction;
    fn jumps(&self) -> Vec<Fraction>;
}

impl ContinuedFractionExt for [i64] {
    fn is_negative(&self) -> bool { self[0].is_negative() }
    fn is_positive(&self) -> bool { self[0].is_positive() }
    // ContinuedFraction to Fraction
    fn to_f(&self) -> Fraction {
        if self.is_empty() {
            panic!("Cannot convert an empty ContinuedFraction to a Fraction!");
        }

        let mut num: i64 = 1;
        let mut den: i64 = 0;

        // inverse Euclidean algorithm
        for &term in self.iter().rev() {
            let old_num = num;
            num = term * num - den;
            den = old_num;
        }
        Fraction::new(num, den)
    }

    // convert [a_1, ... ,a_k, n] to fraction
    fn to_f_with(&self, n: i64) -> Fraction {
        if self.is_empty() {
            panic!("Cannot convert an empty ContinuedFraction to a Fraction!");
        }    

        let mut num: i64 = 1;
        let mut den: i64 = -n;

        // inverse Euclidean algorithm
        for &term in self.iter().rev() {
            let old_num = num;
            num = term * num + den;
            den = -old_num;
        }
        num = -num.abs();
        den = den.abs();
        Fraction::new(num, den)
    }

    // find the last points of A_i's and B_i's
    fn jumps(&self) -> Vec<Fraction> {
        if self.is_empty() { return vec![] }
        let n = self.len();

        // negative continued fractions
        if self.is_negative() { 

            // a_left: last points of each A_i's.
            let mut a_left: Vec<Fraction> = (1..n)
                .rev()
                .filter(|&i| i == 1 || self[i] != -2) // Find the entry that is not -2
                .map(|i| self[0..i].to_f()) // Calculate fraction right before that entry 
                .collect();

            // b_right: last points of each B_i's
            let mut b_right: Vec<Fraction> = (1..n)
                .rev()
                .filter(|&i| {i==1 || self[i - 1] != -2})
                .map(|i| self[0..i].to_f_with(-1)) 
                .collect();

            // now merge two sequences so that s_i to s_{i+1} is connected by an edge 
            if self[n-1] != -2 {      // Start from A_1
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
        // positive cf 
        else {
            // last point of each B_i's. Since it is positive, the last entry must be inf.
            let mut b_right: Vec<Fraction> = (1..n)
                .rev()
                .filter(|&i| self[i] != 2) // Find the entry that is not 2
                .map(|i| self[0..i].to_f_with(0)) // Calculate fraction right before that entry 
                .collect();
            b_right.push(Fraction::INF);

            // last point of each A_i's.
            let mut a_left: Vec<Fraction> = (1..n)
                .rev()
                .filter(|&i| {i==1 || self[i - 1] != 2})
                .map(|i| self[0..i].to_f_with(1)) 
                .collect();

            if self[n-1] != 2 {      // Start from B_1
                let last_b = if b_right.len() > a_left.len() {
                    b_right.pop()
                } else {
                    None
                };

                let mut combined: Vec<Fraction> = b_right.into_iter()
                    .zip(a_left.into_iter())
                    .flat_map(|(a, b)| [a, b])
                    .collect();

                if let Some(extra) = last_b {
                    combined.push(extra);

                    return  combined.iter()
                    .map(|x| x.negate())
                    .collect()
                }
                combined.iter()
                    .map(|x| x.negate())
                    .collect() 
            } else {                         // Start from A_1
                let last_a = if b_right.len() < a_left.len() {
                    a_left.pop()
                } else {
                    None
                };

                let mut combined: Vec<Fraction> = a_left.into_iter()
                    .zip(b_right.into_iter())
                    .flat_map(|(b, a)| [b, a])
                    .collect();

                if let Some(extra) = last_a {
                    combined.push(extra);

                    return combined.iter()
                    .map(|x| x.negate())
                    .collect()
                }
                combined.iter()
                    .map(|x| x.negate())
                    .collect()
            }
        }
    }
}

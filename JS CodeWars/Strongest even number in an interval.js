// function strongestEven(n, m){
//     function strong(x){        
//         let s = 1
//         while (x>0){
//             x = x/2;
            
//             if (x%2===0) {
//                s++ 
//             } else {
//                 return s
//             }            
//         }
//         return s
//     }
//     if (n%2 === 1){
//         n++;
//     } 
    
//     let res = n;
//     let power = strong(res);
//     let t = res;
//     let k;
//     while  (t<m)  {
//         k = Math.pow(2,power);
//         t = t+k;
//         if (t>m) {
//             t = t-k;
//             return t;
//         }
        
//         power = strong(t);

//     }

//     return t;
//   }

// ------- 1
  function strongestEven(n, m){
    let current = n
    for(let step = 1; current + step <= m; step *= 2){
      if((current + step) % (step * 2) === 0) current += step
    }
    return current
}

//------------2
const strongestEven = (n, m) => {
    for (let strength = 2 ** ~~Math.log2(m); strength >= 1; strength /= 2) {
      const candidate = n - (n % strength || strength) + strength;
      if (candidate <= m) return candidate;
    }
  }



console.log(strongestEven(129, 193))
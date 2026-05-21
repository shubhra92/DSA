function user_logic(n, arr) {
    let max = -1;
    for(let i=0; i<n-1; i++){
     for(let j=i+1; j<n; j++){
         let m = arr[j] - arr[i]
         if(m > 0){
             max = Math.max(max, m)
         }
     }
    }
    return max
 }
 
 function main() {
     const fs = require('fs');
     const input = fs.readFileSync('/dev/stdin', 'utf8').trim().split(/\s+/);
     
     let idx = 0;
     const T = parseInt(input[idx++], 10);
     const results = [];
     
     for (let t = 0; t < T; t++) {
         const N = parseInt(input[idx++], 10);
         const arr = input.slice(idx, idx + N).map(Number);
         idx += N;
         
         const result = user_logic(N, arr);
         results.push(result);
     }
     
     for (const result of results) {
         console.log(result);
     }
 }
 
 main();
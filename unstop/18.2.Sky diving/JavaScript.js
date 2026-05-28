function min_parachutes(k, n) {
    // Write your logic here.
    if(k==0 || n==0) return 0

    const dp = new Array(k+1).fill(0)
    let moves = 0;
    while(dp[k] < n){
        moves++
        for(let i=k; i>=1; i-- ){
            dp[i] = dp[i] + dp[i-1] + 1
        }
    } 
    return moves;
}

function main() {
    const input = require('fs').readFileSync('/dev/stdin', 'utf8');
    const data = input.trim().split(/\s+/);
    
    const n = parseInt(data[0], 10);  // Number of floors
    const k = parseInt(data[1], 10);  // Number of parachutes
    
    // Call user logic function and print the output
    const result = min_parachutes(k, n);
    console.log(result);
}

main();
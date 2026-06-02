// Function to calculate the number of unique BSTs (using Catalan number formula)
function numTrees(n) {
    let dp = new Array(n+1).fill(0)
    dp[0] = 1;
    dp[1] = 1;
    for(let node=2; node<=n; node++){
        for(let root=1; root<=node; root++){
            dp[node] += dp[root - 1] * dp[node - root]
        } 
    }

    return dp[n]
}

function main() {
    const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim();
    const result = numTrees(parseInt(input,10));
    console.log(result);
}

main();

function min_cost(v) {
    const len = v.length;

    const dp = new Array(len).fill(Infinity)
    dp[0] = 0
    for(let i=1; i<len; i++){
        dp[i] = Math.min(
            dp[i],
            dp[i-1] + Math.abs(v[i] - v[i-1])
        )

        if(i > 1){
            dp[i] = Math.min(
                dp[i],
                dp[i-2] + Math.abs(v[i] - v[i-2])
            )
        }

        if(i > 2){
            dp[i] = Math.min(
                dp[i],
                dp[i-3] + Math.abs(v[i] - v[i-3])
            )
        }
    }  

    return dp.at(-1)
}

function main() {
    const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split(/\s+/);
    const n = parseInt(input[0]);
    const v = input.slice(1).map(Number);

    const result = min_cost(v);
    console.log(result);
}

main();
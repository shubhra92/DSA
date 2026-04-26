function calculatePairs(n, arr) {
    /**
    * Write your logic here.
    * Parameters:
    *     n (int): The size of the array
    *     arr (Array): Array of integers representing the elements of the array
    * Returns:
    *     int: The required number of pairs based on the problem statement
    */
    const P = new Array(n+1).fill(0);
    for(let i=0; i<n; i++){
        P[i+1] = P[i] + arr[i];
    }
    const sumMap = {}
    let ans = 0;
    for(let b=n-1; b>=1; b--){
        for(let r=b+1; r<=n; r++){
            let sum = P[r] - P[b]
            sumMap[sum] = (sumMap[sum] || 0 ) +1
        }
        for(let a=0; a<b; a++){
            let sum = P[b] - P[a];
            ans+= sumMap[sum] || 0
        }
    }

    return ans;
}

function main() {
    const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
    const n = parseInt(input[0]);
    const arr = input[1].split(' ').map(Number);
    const result = calculatePairs(n, arr);
    console.log(result);
}

main();
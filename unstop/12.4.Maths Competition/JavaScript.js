function minimumTime(N, K, A) {
    // Write your logic here
    if(N == 0) return -1
    if(K == 0) return 0

    let lowTimeMem = Infinity;
    for (let i = 0; i < N; i++) {
        if (A[i] < lowTimeMem) {
            lowTimeMem = A[i];
        }
    }
    if(lowTimeMem == 0) return 0
    if(lowTimeMem == Infinity) return -1

    let low =0n
    let high = BigInt(lowTimeMem*K)
    let ans = -1n
    while(low <= high){
        let mid = low + (high - low)/2n
        if(canInTime(mid)){
            ans = mid;
            high = mid-1n
        }else {
            low = mid+1n
        }

    }

    function canInTime(mid){
        let totalMath = 0n;
        for(let i=0; i<N; i++){
            totalMath+=mid/BigInt(A[i])
            if(totalMath >= BigInt(K)){
                return true
            }
        }

        return totalMath >= BigInt(K)
    }

    return ans != -1n? Number(ans):-1;
}

const fs = require('fs');

const input = fs.readFileSync(0, 'utf-8').trim().split(/\s+/);

let index = 0;

const N = Number(input[index++]);
const K = Number(input[index++]);

const A = [];

for (let i = 0; i < N; i++) {
    A.push(Number(input[index++]));
}

console.log(minimumTime(N, K, A));
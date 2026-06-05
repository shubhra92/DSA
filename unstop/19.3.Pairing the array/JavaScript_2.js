function gcd(a, b) { 
    while (b !== 0) {
        [a, b] = [b, a % b]; 
    }
    return a;
}
function count_pairs_divisible_by_k(k, n, arr) {
    // Write your logic here
    const map = new Map();
    const cMap = new Map([
        [1,0],
        [k,0],
    ])
    let c = 0;
    for(let i=0; i<n; i++){
        let e = arr[i]
        let g = gcd(e,k)

        if(g == 1){
            c+=cMap.get(k)
            cMap.set(1,(cMap.get(1) || 0) +1)
        } else if(g == k){
            c+=i
            cMap.set(k,(cMap.get(k) || 0) +1)
        } else {
            c+=cMap.get(k)
            for(let [key, v] of map){
                if(g*key%k == 0){
                    c+=v
                }
            }
            map.set(g, (map.get(g) || 0) +1)
        }
    }
    return c

}

function main() {
    const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split(/\s+/);
    const k = parseInt(input[0]);
    const n = parseInt(input[1]);
    const arr = input.slice(2, 2 + n).map(Number);
    const result = count_pairs_divisible_by_k(k, n, arr);
    console.log(result);
}

main();
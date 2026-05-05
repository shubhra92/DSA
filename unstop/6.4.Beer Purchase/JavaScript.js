function max_bottle_cost(n, x, costs) {
    // Write your logic here.
    costs.sort((a,b)=>a-b)
    const arr = new Array(n+1).fill(0);
    for(let i=0; i<n; i++){
        arr[i+1] = arr[i] + costs[i]
    }
    let c = 0;
    for(let i=1; i<=n; i++){
        if(arr[i] > x){
            return c
        }
        c += Math.floor(((x - arr[i])/i))+1
    }
    
    return c;
}

function main() {
    const fs = require('fs');
    const input = fs.readFileSync('/dev/stdin', 'utf8');
    const data = input.trim().split(/\s+/);
    const n = parseInt(data[0]);
    const x = parseInt(data[1]);
    const costs = data.slice(2).map(Number);
    const result = max_bottle_cost(n, x, costs);
    console.log(result);
}

main();
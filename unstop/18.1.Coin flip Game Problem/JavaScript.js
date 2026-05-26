function find(m) {
    // User logic goes here
    let arr = new Array(m).fill(1)
    let c = 0;
    let i =1
    while(i<m){
        for(let j=i; j<m; j+=i+1){
            arr[j] = arr[j] == 0 ? 1 : 0
        }
        i++
    }
    for(let k=0; k<m; k++){
        c+=arr[k] == 1?1:0
    }
    return c; // Placeholder return value
}

function main() {
    const fs = require('fs');
    const input = fs.readFileSync('/dev/stdin', 'utf8');
    const m = parseInt(input, 10)
    const result = find(m);
    console.log(result);
}

main();
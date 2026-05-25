function find_winner(arr) {
    // Write your logic here.
    // console.log(arr)
    let map = {}
    for(let i of arr) 
        map[i] = (map[i] || 0)+1
    for(let key of new Set(arr))
        if(map[key] == 1) return key
    return 0;
}

function main() {
    const fs = require('fs');
    const input = fs.readFileSync('/dev/stdin', 'utf8');
    const data = input.trim().split(/\s+/);
    
    const n = parseInt(data[0], 10);  // First input is the integer N
    const arr = data.slice(1).map(Number);  // Remaining input is the array of integers
    
    // Call user logic function and print the output
    const result = find_winner(arr);
    console.log(result);
}

main();
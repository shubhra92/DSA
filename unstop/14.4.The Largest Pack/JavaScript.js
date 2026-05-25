function find_largest_pack(N) {
    // Write your logic here.
    // Parameters:
    //     N (int): Number of marbles produced in a day
    // Returns:
    //     int: Number of marbles in the largest pack that can be produced
    let p = 1
    while(p*2 <= N) p*=2
    return p; // placeholder
}

function main() {
    const fs = require('fs');
    const input = fs.readFileSync('/dev/stdin').toString().trim();
    const N = parseInt(input);
    const result = find_largest_pack(N);
    console.log(result);
}

main();
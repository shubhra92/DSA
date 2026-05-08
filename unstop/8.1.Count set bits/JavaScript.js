// Placeholder for user logic function
function countOnesInBinary(N) {
    // User should implement the logic here
    let c = 0;
    for(let i=1; i<=N; i++){
        let bitStr = i.toString(2)
        for(let bit of bitStr){
            if(bit == 1) c++
        }
    }
    return c; // Placeholder return value
}

(function main() {
    const fs = require('fs');
    const input = fs.readFileSync('/dev/stdin', 'utf8');
    const N = parseInt(input.trim(), 10); // Read the integer N

    // Call the user logic function
    const result = countOnesInBinary(N);
    
    // Output the result
    console.log(result);
})();
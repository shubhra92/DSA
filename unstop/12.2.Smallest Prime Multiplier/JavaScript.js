function compute_x(p, n) {
    // Convert inputs to BigInt to handle values up to 10^18 safely
    const bigP = BigInt(p);
    const bigN = BigInt(n);

    function gcd(a, b) {
        while (b !== 0n) {
            let temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }


    const result = (bigP / gcd(bigP, bigN)) * bigN;
    
    // Convert back to string to safely print without the 'n' suffix
    return result.toString();
}

function main() {
    const fs = require('fs');
    const input = fs.readFileSync('/dev/stdin', 'utf8');
    const data = input.trim().split(' ');
    
    const p = parseInt(data[0], 10);  // First input is the long long integer p
    const n = parseInt(data[1], 10);  // Second input is the long long integer n
    
    // Call user logic function and print the output
    const result = compute_x(p, n);
    console.log(result);
}

main();
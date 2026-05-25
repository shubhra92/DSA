function calculate_sum(nums) {
    // Find smallest missing positive integer
    const set = new Set(nums);

    let missing = 1;
    while (set.has(missing)) {
        missing++;
    }

    // ASCII value of first digit
    const firstDigit = String(missing)[0];
    const asciiValue = firstDigit.charCodeAt(0);

    // Sum of array elements
    let total = nums.reduce((sum, num) => sum + num, 0);

    // Final result
    return total + asciiValue;
}

function main() {
    const fs = require('fs');
    const input = fs.readFileSync('/dev/stdin').toString().trim().split(/\s+/);
    const n = parseInt(input[0], 10);
    const nums = input.slice(1).map(Number);
    const result = calculate_sum(nums);
    console.log(result);
}

main();
function determineColor(s) {
    // Write your logic here to determine the color based on the string s.
    // Return "Black" or "White" based on the problem statement.
    return s.charCodeAt(0)%2 + s.charCodeAt(1)%2 == 1? "White":"Black"
}

function main() {
    const fs = require('fs');
    const input = fs.readFileSync('/dev/stdin', 'utf8').trim();
    const result = determineColor(input);
    console.log(result);
}

main();
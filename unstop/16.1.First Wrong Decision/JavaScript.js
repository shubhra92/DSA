function FirstWrongDecision(s) {
    // User logic goes here
    return s.indexOf("W")
}

function main() {
    const input = require('fs').readFileSync('/dev/stdin', 'utf8');
    const result = FirstWrongDecision(input);
    console.log(result)
}

main();
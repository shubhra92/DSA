// JavaScript

function user_logic(n, s) {
    // Write your logic here.
    // Parameters:
    //     n (int): Length of the string S
    //     s (string): Valid parentheses string consisting of digits 0-9 and characters '+', '-', '*', '/', '(', ')'
    // Returns:
    //     int: Maximum nesting depth of the string S

    let cd = 0;
    let md = 0

    for(let e of s){
        if(e=="("){
            cd++
            md = Math.max(cd, md)
        } else if(e==")") {
            cd --
        }
    }
    return md;
}

function main() {
    const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
    const n = parseInt(input[0]);
    const s = input[1];
    const result = user_logic(n, s);
    console.log(result);
}

main();
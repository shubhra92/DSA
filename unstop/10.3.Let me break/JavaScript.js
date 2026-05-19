function check_if_can_break(s1, s2) {
    let a = s1.trim().split("").sort()
    let b = s2.trim().split("").sort()

    if(a.length != b.length) return false;

    let aBreakB = true;
    let bBreackA = true;

    for(let i=0; i<a.length; i++){
        if(a[i] < b[i]){
            aBreakB = false;
        }
        if(b[i] < a[i]){
            bBreackA = false;
        }
    } 

    return aBreakB || bBreackA; // Placeholder return value
}

function main() {
    const fs = require('fs');
    const input = fs.readFileSync('/dev/stdin', 'utf8').trim().split('\n');
    
    const s1 = input[0]; // First input line is string s1
    const s2 = input[1]; // Second input line is string s2
    
    // Call user logic function and print the output
    const result = check_if_can_break(s1, s2);
    if (result) {
        console.log("true");
    } else {
        console.log("false");
    }
}

main();
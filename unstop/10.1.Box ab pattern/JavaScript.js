function follows_ab_pattern(s) {
    let isB = false
    for(let ch of s){
        if(!isB && ch=='b'){
            isB = true
        } else if (isB && ch == 'a') 
            return "NO"
    }

    return "YES";
}

function main() {
    const fs = require('fs');
    const input = fs.readFileSync('/dev/stdin', 'utf8');
    const s = input.trim();
    
    // Call user logic function and print the output
    const result = follows_ab_pattern(s);
    console.log(result);
}

main();
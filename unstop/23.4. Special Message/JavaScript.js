function specialmsg(s, vocab) {
    // Write your logic here.
    const map = new Map(vocab)
    let res = s.replaceAll(/\([a-z]+\)/g, (match)=>{
        let k = match.slice(1,-1)
        return map.has(k) ? map.get(k).trim() : "?"
    })
    return res
}

function main() {
    const fs = require('fs');
    const input = fs.readFileSync('/dev/stdin', 'utf8');
    const data = input.trim().split('\n');
    
    const s = data[0];  // First line is the string S
    const n = parseInt(data[1]);  // Second line is the size of key-value pairs
    
    const vocab = [];
    for (let i = 2; i < 2 + n; i++) {
        const [key, value] = data[i].split(' ');
        vocab.push([key, value]);
    }
    
    // Call user logic function and print the output
    const result = specialmsg(s, vocab);
    console.log(result);
}

main();
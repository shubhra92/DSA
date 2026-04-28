function compareBits(a, b) {
    let td = 0
    for(let i=0; i<=b.length - a.length; i++){
        let d = 0
        for(let j=i, k=0; j<i+a.length && k<a.length; j++, k++){
            if(a[k] != b[j]) d++
        }
        td+=d
    }
    return td

}

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];
rl.on('line', function(line) {
    input.push(line);
}).on('close', function() {
    const a = input[0];
    const b = input[1];
    console.log(compareBits(a, b));
});
function diagonal_sum(n) {
    return n*2 - (n%2==0?0:1)
}

const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

let input = [];
rl.on('line', (line) => {
    input.push(line);
}).on('close', () => {
    const n = parseInt(input[0]);
    const result = diagonal_sum(n);
    console.log(result);
});
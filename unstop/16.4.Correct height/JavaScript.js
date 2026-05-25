function heightChecker(heights) {
    // User logic goes here
    const expected = heights.slice().sort((a,b)=>a-b)
    let c =0
    const len = expected.length
    for(let i=0; i<len; i++){
        if(expected[i] != heights[i]) c++
    }
    return c
}

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];
rl.on('line', (line) => {
    input.push(line);
}).on('close', () => {
    const n = parseInt(input[0]);
    const arr = input[1].trim().split(/\s+/).map(Number);
    const result = heightChecker(arr);
    console.log(result);
});
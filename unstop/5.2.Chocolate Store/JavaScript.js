function processQueries(q, queries) {
    // Placeholder function for user logic
    const store = {}

    for(let q of queries){
        if(q[0]==1){
            store[q[1]] = (store[q[1]] || 0) + Number(q[2])
        }else if(store[q[1]] >= q[2]){
            console.log(q[2])
            store[q[1]] = store[q[1]] - q[2]
        } else if(store[q[1]] < q[2]){
            console.log(store[q[1]] ?? 0)
            store[q[1]] = 0;
        } else {
            console.log(0)
        }
    }
    
}

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];
rl.on('line', (line) => {
    input.push(line);
});

rl.on('close', () => {
    const q = parseInt(input[0]);
    const queries = input.slice(1).map(line => line.split(' '));
    processQueries(q, queries);
});
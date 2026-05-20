function calculate_total_cost(k, n, m, graph) {
    if (m === 0) {
        return 0;
    }
    let count = Math.floor(n / m);

    return count * k;
}

function main() {
    const fs = require('fs');
    const input = fs.readFileSync('/dev/stdin', 'utf8').trim().split(/\s+/);
    
    const k = parseInt(input[0]);  // Price of the bulb
    const n = parseInt(input[1]);  // Total number of bulbs
    const m = parseInt(input[2]);  // Number of bulbs divisible by m
    const len_graph = parseInt(input[3]);  // Length of the 2D array
    
    const graph = [];
    let index = 4;
    for (let i = 0; i < len_graph; i++) {
        const u = parseInt(input[index]);
        const v = parseInt(input[index + 1]);
        graph.push([u, v]);
        index += 2;
    }
    
    // Call user logic function and print the output
    const total_cost = calculate_total_cost(k, n, m, graph);
    console.log(total_cost);
}

main();
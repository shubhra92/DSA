function user_logic(bst1_nodes, bst2_nodes) {
    // Write your logic here.
    return bst1_nodes.concat(bst2_nodes).sort((a,b)=>a-b)
}

function main() {
    const input = require('fs').readFileSync('/dev/stdin', 'utf8');
    const data = input.trim().split(/\s+/);
    
    const N = parseInt(data[0], 10);
    const bst1_nodes = data.slice(1, N + 1).map(Number);
    
    const M = parseInt(data[N + 1], 10);
    const bst2_nodes = data.slice(N + 2, N + 2 + M).map(Number);
    
    const result = user_logic(bst1_nodes, bst2_nodes);
    
    console.log(result.join(' '));
}

main();
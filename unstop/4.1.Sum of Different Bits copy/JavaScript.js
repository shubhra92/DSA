class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

function user_logic(root) {
    // Write your logic here to find the maximum length of the marathon.
    let totalDiameter = 0
    function dfs (node){
        if(!node) return 0

        const left = dfs(node.left);
        const right = dfs(node.right);

        totalDiameter = Math.max(totalDiameter, left+right)

        return Math.max(left,right) +1
    }
    dfs(root)
    return totalDiameter;
}

function construct_tree(i, nodes) {
    if (i < 0 || i >= nodes.length || nodes[i] === null) {
        return null;
    }
    const node = new TreeNode(i + 1);
    if (nodes[i][0] !== -1) {
        node.left = construct_tree(nodes[i][0] - 1, nodes);
    }
    if (nodes[i][1] !== -1) {
        node.right = construct_tree(nodes[i][1] - 1, nodes);
    }
    return node;
}

function main() {
    const fs = require('fs');
    const input = fs.readFileSync('/dev/stdin', 'utf8').trim().split(/\s+/);
    const n = parseInt(input[0], 10);
    const nodes = [];
    for (let i = 0; i < n; i++) {
        const l = parseInt(input[2 * i + 1], 10);
        const r = parseInt(input[2 * i + 2], 10);
        nodes.push([l, r]);
    }
    const root = construct_tree(0, nodes);
    const result = user_logic(root);
    console.log(result);
}

main();
class TreeNode {
    constructor(x) {
        this.val = x;
        this.left = null;
        this.right = null;
    }
}

function insertIntoBST(root, val) {
    if (!root) return new TreeNode(val);
    if (val <= root.val) root.left = insertIntoBST(root.left, val);
    else root.right = insertIntoBST(root.right, val);
    return root;
}

function sumOfValuesInRange(root, start, end) {
    // Your logic here.
    let totalSum = 0;
    function dfs(node) {
        if(!node) return null
        dfs(node.left)
        dfs(node.right)
        if(node.val >=start && node.val <= end) totalSum+=node.val
    }

    dfs(root);
    return totalSum;
}

function main() {
    const fs = require('fs');
    const input = fs.readFileSync('/dev/stdin', 'utf8').trim().split(/\s+/);
    const n = parseInt(input[0], 10);
    const values = input.slice(1, n + 1).map(Number);
    const start = parseInt(input[n + 1], 10);
    const end = parseInt(input[n + 2], 10);
    let root = null;
    values.forEach(val => {
        root = insertIntoBST(root, val);
    });
    const result = sumOfValuesInRange(root, start, end);
    console.log(result);
}

main();
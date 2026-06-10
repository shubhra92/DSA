class TreeNode {
    constructor(x) {
        this.val = x;
        this.left = null;
        this.right = null;
    }
}

function make_tree(idx, n, arr) {
    if (idx >= n || arr[idx] === -1) {
        return null;
    }
    const root = new TreeNode(arr[idx]);
    root.left = make_tree(2 * idx + 1, n, arr);
    root.right = make_tree(2 * idx + 2, n, arr);
    return root;
}

function user_logic(root) {
    let total = 0
    function dfs(node, curr){
        if(!node) return null;

        curr = (curr << 1) + node.val

        if(!node.left && !node.right){
            total+=curr
        }

        dfs(node.left, curr)
        dfs(node.right, curr)
    }
    dfs(root, 0)
    return total;
}

function main() {
    const input = require('fs').readFileSync('/dev/stdin', 'utf-8').trim().split(/\s+/);
    const n = parseInt(input[0], 10);
    const arr = input.slice(1).map(Number);
    const root = make_tree(0, n, arr);
    const result = user_logic(root);
    console.log(result);
}

main();
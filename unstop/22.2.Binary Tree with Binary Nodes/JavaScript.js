function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

function stringToTreeNode(input) {
    const queue = [];
    const parts = input.trim().slice(1, -1).split(',');
    if (!parts[0]) return null;
    const root = new TreeNode(parseInt(parts[0]));
    queue.push(root);
    let index = 1;
    while (queue.length) {
        const node = queue.shift();
        if (index < parts.length) {
            const leftVal = parts[index++].trim();
            if (leftVal !== 'null') {
                node.left = new TreeNode(parseInt(leftVal));
                queue.push(node.left);
            }
        }
        if (index < parts.length) {
            const rightVal = parts[index++].trim();
            if (rightVal !== 'null') {
                node.right = new TreeNode(parseInt(rightVal));
                queue.push(node.right);
            }
        }
    }
    return root;
}

function treeNodeToString(root) {
    if (!root) return '[]';
    const queue = [root];
    const result = [];
    while (queue.length) {
        const node = queue.shift();
        if (node) {
            result.push(node.val);
            queue.push(node.left);
            queue.push(node.right);
        } else {
            result.push('null');
        }
    }
    return `[${result.join(', ')}]`;
}

function pruneTree(root) {
    // User needs to implement this method
    function dfs (node){
        if(!node) return 0;

        let left = dfs(node.left)
        let right = dfs(node.right)
        if(left == 0){
            node.left = null
        }
        if(right == 0){
            node.right = null
        }

        return node.val + left + right
    }
    let r = dfs(root)
    return r==0 ? null : root;
}

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});
rl.on('line', (line) => {
    const root = stringToTreeNode(line);
    const result = pruneTree(root);
    const output = treeNodeToString(result);
    console.log(output);
});

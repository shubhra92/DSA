class TreeNode {
    constructor(x) {
        this.val = x;
        this.left = null;
        this.right = null;
    }
}

function create_tree(data) {
    if (data.length === 0 || data[0] === 'N') {
        return null;
    }

    let root = new TreeNode(parseInt(data[0]));
    let queue = [root];
    let i = 1;

    while (queue.length && i < data.length) {
        let current = queue.shift();

        if (i < data.length && data[i] !== 'N') {
            current.left = new TreeNode(parseInt(data[i]));
            queue.push(current.left);
        }
        i++;

        if (i < data.length && data[i] !== 'N') {
            current.right = new TreeNode(parseInt(data[i]));
            queue.push(current.right);
        }
        i++;
    }

    return root;
}

function left_view(root) {
    // Write your logic here.
    // Parameters:
    //     root (TreeNode): The root of the binary tree
    // Returns:
    //     list: List of integers visible from the left side of the binary tree
    if (!root) return [];

    const result = [];
    const queue = [root];

    while (queue.length) {
        const size = queue.length;

        for (let i = 0; i < size; i++) {
            const node = queue.shift();

            // First node of this level
            if (i === 0) {
                result.push(node.val);
            }

            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
    }

    return result;
}

function main() {
    const fs = require('fs');
    const input = fs.readFileSync('/dev/stdin', 'utf8').trim();
    const data = input.split(/\s+/);

    const n = parseInt(data[0]);
    const tree_nodes = data.slice(1, n + 1);

    const root = create_tree(tree_nodes);

    const result = left_view(root);

    console.log(result.join(' '));
}

main();

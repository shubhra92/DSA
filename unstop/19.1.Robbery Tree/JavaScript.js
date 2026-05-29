class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

function insertLevelOrder(arr, i) {
    if (i >= arr.length || arr[i] === "null") {
        return null;
    }
    let root = new TreeNode(parseInt(arr[i]));
    root.left = insertLevelOrder(arr, 2 * i + 1);
    root.right = insertLevelOrder(arr, 2 * i + 2);
    return root;
}

function user_logic(root) {
    /*
    Write your logic here.
    Parameters:
        root (TreeNode): The root node of the binary tree
    Returns:
        int: Computed result based on the problem statement
    */
    function dfs(node){
        if(!node) return [0,0]

        let left = dfs(node.left)
        let right = dfs(node.right)

        let rob = node.val + left[0] + right[0]

        let notRob = Math.max(left[0], left[1]) + Math.max(right[0], right[1])

        return [notRob, rob]
    }

    return Math.max(...dfs(root))
}

function main() {
    const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split(' ');
    const root = insertLevelOrder(input, 0);
    const result = user_logic(root);
    console.log(result);
}

main();
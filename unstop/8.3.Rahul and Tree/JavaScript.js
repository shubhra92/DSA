class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

function construct(arr, lo, hi) {
    // User will write their logic here
    function createTree (restArr){
        let midIdx = Math.floor(restArr.length/2)
        const node = new Node(restArr[midIdx])
        if(restArr.length == 1) return node
        node.left = createTree(restArr.slice(0,midIdx))
        node.right =restArr.length == 2 ? null :createTree(restArr.slice(midIdx+1))

        return node
    }
    return createTree(arr); // Placeholder return value
}

function display(node) {
    if (node === null) {
        return;
    }

    let str = '';
    str += (node.left === null) ? '.' : node.left.data;
    str += ' <- ' + node.data + ' -> ';
    str += (node.right === null) ? '.' : node.right.data;
    console.log(str);

    display(node.left);
    display(node.right);
}


(function main() {
    const fs = require('fs');
    const input = fs.readFileSync('/dev/stdin', 'utf8');
    const data = input.trim().split(/\s+/).map(Number)
    const n = data[0]
    const arr = data.slice(1)

    if (arr.length === n) {
        arr.sort((a, b) => a - b);
        let root = construct(arr, 0, n - 1);
        display(root);
    }

})();

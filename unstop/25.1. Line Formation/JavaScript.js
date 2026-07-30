// JavaScript
class Node {
    constructor(x) {
        this.val = x;
        this.next = null;
    }
}

function minChanges(head, n) {
    // Write your logic here.
    let arr = []
    let node = head
    while(node){
        arr.push(node.val)
        node = node.next
    }
    let sorted = [...arr].sort((a,b)=>a-b)
    let c = 0;
    for(let i =0; i<n; i++){
        if(sorted[i] != arr[i]) c++
    }

    return c
}

function main() {
    const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split(/\s+/);
    const n = parseInt(input[0], 10);
    const values = input.slice(1).map(Number);
    
    let head = new Node(values[0]);
    let temp = head;
    for (let i = 1; i < values.length; i++) {
        temp.next = new Node(values[i]);
        temp = temp.next;
    }
    
    const result = minChanges(head, n);
    console.log(result);
}

main();
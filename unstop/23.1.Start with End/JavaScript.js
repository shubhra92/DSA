
class Node {
    constructor(x) {
        this.val = x;
        this.next = null;
    }
}

function build_linked_list(size, elements) {
    if (size === 0) return null;
    let head = new Node(elements[0]);
    let tail = head;
    for (let i = 1; i < size; i++) {
        tail.next = new Node(elements[i]);
        tail = tail.next;
    }
    return head;
}

function pair_sum(head) {
    /*
    Write your logic here.
    Parameters:
        head (Node): Head of the linked list
    Returns:
        int: Maximum sum of symmetric pairs
    */
    let arr = []
    let node = head
    while(node){
        arr.push(node.val)
        node = node.next 
    }
    let max = 0
    for(let i=0, j=arr.length-1; i<=j; i++, j--){
        max = Math.max(arr[i] + arr[j], max)
    }
    return max;
}

function main() {
    const fs = require('fs');
    const input = fs.readFileSync('/dev/stdin').toString().trim().split(/\s+/);
    const data = input
    
    const n = parseInt(data[0]);  // First input is the integer n
    const elements = data.slice(1, n + 1).map(Number);  // Next n inputs are the elements of the linked list

    const head = build_linked_list(n, elements);
    
    // Call the user logic function and print the output
    const result = pair_sum(head);
    console.log(result);
}

main();

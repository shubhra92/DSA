class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

function swapNodes(head, k) {
    // Write your logic here.
    let stKnode = { prev: null, node: null, next: null }, 
    enKnode = { prev: null, node: null, next: null },
    currNode = { prev: null, node: head };


    let i =1
    while(currNode.node){
        if(i == k){
            stKnode.prev = currNode.prev
            stKnode.node = currNode.node
        }
        if(i>=k){
            enKnode.prev = enKnode.node
            enKnode.node = i == k ? head : enKnode.node.next
        }
        currNode.prev = currNode.node
        currNode.node = currNode.node.next
        i++
    }
    if(stKnode.prev && enKnode.node){
        stKnode.prev.next = enKnode.node
    }
    enKnode.next = enKnode.node?.next ?? null, stKnode.next = stKnode.node?.next?? null;
    if(enKnode.prev && stKnode.node){
        enKnode.prev.next = stKnode.node
    }
    if(enKnode.next){
        stKnode.node.next = enKnode.next
    }
    if(stKnode.next){
        enKnode.node.next = stKnode.next
    }


    return head;
}

function main() {
    const fs = require('fs');
    const input = fs.readFileSync('/dev/stdin', 'utf8').trim().split(/\s+/);
    
    let n = parseInt(input[0]);
    let values = input.slice(1, n + 1).map(Number);
    let k = parseInt(input[n + 1]);

    let dummy = new ListNode();
    let current = dummy;
    for (let value of values) {
        current.next = new ListNode(value);
        current = current.next;
    }

    let head = dummy.next;
    let modified_head = swapNodes(head, k);

    let result = [];
    current = modified_head;
    while (current) {
        result.push(current.val);
        current = current.next;
    }
    console.log(result.join(' '));
}

main();
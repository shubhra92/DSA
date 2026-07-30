class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    print() {
        let temp = this.head;
        while (temp !== null) {
            process.stdout.write(`${temp.data} `);
            temp = temp.next;
        }
    }

    push(data) {
        if (this.head === null) {
            let temp = new Node(data);
            this.head = temp;
            this.tail = temp;
        } else {
            let temp = new Node(data);
            this.tail.next = temp;
            this.tail = temp;
        }
    }
}

function reverseLinkedListUpToX(ll, x) {
    // User needs to implement the logic here
    let node = ll.head
    let newNode = null
    let tail = null
    while(node){
        let temp = new Node(node.data)
        temp.next = newNode
        if(!newNode) tail = temp
        newNode = temp
        if(node.data == x){
            tail.next = node.next
            break
        }
        node = node.next
    }
    ll.head = newNode
}

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const ll = new LinkedList();
let inputLines = [];
rl.on('line', input => {
    inputLines.push(input);
}).on('close', () => {
    const n = parseInt(inputLines[0]);

    const nodeVals = inputLines[1].split(/\s+/)
    for (let i = 0; i <n; i++) {
        const t = parseInt(nodeVals[i]);
        ll.push(t);
    }
    const x = parseInt(inputLines[2]);
    reverseLinkedListUpToX(ll, x);
    ll.print();
});
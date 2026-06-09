class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

// Function to swap nodes pairwise
function swapPairs(head) {
    // Write your logic here
    let prev = null
    let node = head
    while(node && node.next){ 
        let next = node.next
        node.next = next.next
        next.next = node
        if(prev) prev.next = next
        else head = next
        prev = node
        node = node.next
    }

    return head;
}

// Convert input string to linked list
function stringToListNode(input) {

    if (input === "[]") return null;

    input = input.slice(1, -1);
    input = input.replace(/,/g, " ");

    const values = input.trim().split(/\s+/).map(Number);

    let dummy = new ListNode(0);
    let curr = dummy;

    for (let val of values) {
        curr.next = new ListNode(val);
        curr = curr.next;
    }

    return dummy.next;
}

// Convert linked list to string
function listNodeToString(head) {

    let result = [];

    while (head) {
        result.push(head.val);
        head = head.next;
    }

    return "[" + result.join(", ") + "]";
}

// Main
const fs = require("fs");

const input = fs.readFileSync(0, "utf8").trim();

const head = stringToListNode(input);

const result = swapPairs(head);

console.log(listNodeToString(result));
class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

function insertNode(head, val) {
    const newNode = new ListNode(val);
    if (head[0] === null) {
        head[0] = newNode;
        return;
    }
    let temp = head[0];
    while (temp.next !== null) {
        temp = temp.next;
    }
    temp.next = newNode;
}

function printList(node) {
    if (node === null) {
        console.log("null");
        return;
    }
    let str = ""
    while (node !== null) {
        str += " " + node.val
        node = node.next;
    }
    console.log(str);
}

function deleteDuplicates(head) {
    // Write your logic here to delete duplicates from the linked list.
    // Parameters: head (ListNode): Head of the linked list
    // Returns: ListNode: Head of the linked list after removing duplicates
    let node = head
    let resHead = new ListNode(null)
    let tNode = resHead
    let d = new Set()
    while(node){
        if(d.has(node.val)){
            node = node.next
            continue
        }else if(node.next && node.val === node.next.val){
            d.add(node.val)
            node = node.next
            continue
        }

        if(!tNode.val){
            tNode.val = node.val
        }else {
            tNode.next = new ListNode(node.val)
            tNode = tNode.next
        }
        node = node.next
    }
    return resHead;
}

function main() {
    const fs = require("fs");
    const input = fs.readFileSync(0, "utf-8").trim().split(/\s+/);

    const n = parseInt(input[0], 10);
    const head = [null];

    for (let i = 1; i <= n; i++) {
        const temp = parseInt(input[i], 10);
        insertNode(head, temp);
    }

    const res = deleteDuplicates(head[0]);
    printList(res);
}

main();

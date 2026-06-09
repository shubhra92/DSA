class Node {
    constructor(x) {
        this.val = x;
        this.next = null;
    }
}

function check(l1, l2) {
    // Write your logic here.
    // Return 1 if the linked lists merge, otherwise 0
    let l1_node = l1, l2_node = l2, l1_set = new Set(), l2_set = new Set();
    while(l1_node || l2_node){
        if(l1_node){
            if(l2_set.has(l1_node.val)) return 1
            l1_set.add(l1_node.val)
            l1_node = l1_node.next
        }
        if(l2_node){
            if(l1_set.has(l2_node.val)) return 1
            l2_set.add(l2_node.val)
            l2_node = l2_node.next
        }
    }

    return 0;
}

function main() {
    const input = require('fs').readFileSync('/dev/stdin', 'utf8');
    const data = input.trim().split(/\s+/);
    
    const n = parseInt(data[0]);  // Size of the first linked list
    const m = parseInt(data[1]);  // Size of the second linked list
    
    const map = {};
    
    // Create first linked list
    let l1 = new Node(0);
    let temp = l1;
    let index = 2;
    for (let i = 0; i < n; i++) {
        const t = parseInt(data[index]);
        index += 1;
        if (map[t]) {
            curr = map[t];
        } else {
            curr = new Node(t);
            map[t] = curr;
        }
        temp.next = curr;
        temp = temp.next;
    }
    l1 = l1.next;
    
    // Create second linked list
    let l2 = new Node(0);
    temp = l2;
    for (let i = 0; i < m; i++) {
        const t = parseInt(data[index]);
        index += 1;
        if (map[t]) {
            curr = map[t];
        } else {
            curr = new Node(t);
            map[t] = curr;
        }
        temp.next = curr;
        temp = temp.next;
    }
    l2 = l2.next;
    
    // Call the user logic function
    const result = check(l1, l2);
    console.log(result);
}

main();
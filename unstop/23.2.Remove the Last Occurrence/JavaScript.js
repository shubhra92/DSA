class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

function remove_last_occurrences(head) {
    // Write your logic here to remove the last occurrence of all elements in the linked list.
    let map = {}
    let node = head
    while(node){
        map[node.val] = (map[node.val] || 0) + 1
        node = node.next
    }
    node = head
    let prev = null
    while(node){
        let v = node.val
        if(map[v] > 1){
            map[v] = map[v] - 1
            prev = node
        } else if(map[v] == 1){
            if(!prev){
                node = node.next
                head = node
                continue
            }else {
                prev.next = node.next
            }
        }
        node = node.next
    }

    return head;
}

function print_linked_list(head) {
    let current = head;
    while (current) {
        process.stdout.write(current.val + " ");
        current = current.next;
    }
    process.stdout.write("\n");
}

function main() {
    const fs = require('fs');
    const input = fs.readFileSync('/dev/stdin', 'utf8').trim().split(/\s+/);

    const n = parseInt(input[0], 10);
    const values = input.slice(1).map(Number);

    if (n === 0) {
        console.log("");
        return;
    }

    let head = new ListNode(values[0]);
    let current = head;
    for (let i = 1; i < values.length; i++) {
        current.next = new ListNode(values[i]);
        current = current.next;
    }

    // Call user logic function
    const modified_head = remove_last_occurrences(head);

    // Print the modified linked list
    print_linked_list(modified_head);
}

main();
function user_logic(bob_str, alice_str) {
    /**
     * Write your logic here.
     * @param {string} bob_str - String typed by Bob
     * @param {string} alice_str - String typed by Alice
     * @returns {string} 'YES' if Alice is able to print the exact words as Bob, otherwise 'NO'
     */
    let bob = bob_str.split(/.#/).join("")
    let alice = alice_str.split(/.#/).join("")

    return bob == alice ? "YES": "NO"
}

function main() {
    const fs = require('fs');
    const input = fs.readFileSync('/dev/stdin', 'utf8').trim().split('\n');
    
    const bob_str = input[0];  // First line is the string typed by Bob
    const alice_str = input[1];  // Second line is the string typed by Alice
    
    // Call user logic function and print the output
    const result = user_logic(bob_str, alice_str);
    console.log(result);
}

main();
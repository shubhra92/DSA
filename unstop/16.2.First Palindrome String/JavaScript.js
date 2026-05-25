// Placeholder function for user logic
function firstPalindrome(words) {

    // User should implement the logic here
    // This function should return the first palindromic string in the array
    // If no such string exists, return an empty string ""
    const wArr = words[0].split(/\s+/)
    function pelinCheck(w){
        let i=0, j=w.length -1
        while(i<=j){
            if(w[i] != w[j]) return false
            i++; j--
        }
        return true
    }
    for(let w of wArr) {
        if(pelinCheck(w)) return w
    }
    return ""
}

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];
rl.on('line', (line) => {
    input.push(line);
});

rl.on('close', () => {
    const n = parseInt(input[0]);  // Read the number of strings
    
    if (n <= 0) {  // Edge case: No strings provided
        console.log("");
    } else {
        const arr = input.slice(1, n + 1);  // Read each string into the array
        const result = firstPalindrome(arr);
        console.log(result);
    }
});

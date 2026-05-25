function count_characters(words, chars) {
    /*
    Write your logic here.
    Parameters:
        words (Array): List of strings
        chars (String): Character string
    Returns:
        Number: Computed result based on the problem statement
    */
    const ccMap = {} //char count map
    for(let ch of chars) 
        ccMap[ch] = (ccMap[ch] || 0 )+1

    let c =0
    for(let w of words){
        let map = {}
        let isPossible = true

        for(let ch of w){
            map[ch] = (map[ch] || 0) +1
        }
        for(let key in map){
            if(!ccMap[key] || map[key] > ccMap[key]) {
                isPossible = false
                break
            }
        }

        if(isPossible) c+=w.length
    }

    return c;
}

function main() {
    const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
    const n = parseInt(input[0], 10);
    const words = input.slice(1, n + 1).map((w)=>w.trim());
    const chars = input[n + 1];
    
    const result = count_characters(words, chars);
    console.log(result);
}

main();
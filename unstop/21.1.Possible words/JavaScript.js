function letterCombinations(digits) {
    // Write your logic here
    // Parameters:
    //     digits (string): Input string containing digits
    // Returns:
    //     array: List of all possible letter combinations sorted in order
    let nMap = {
        2: ['a','b','c'],
        3: ['d','e','f'],
        4: ['g','h','i'],
        5: ['j','k','l'],
        6: ['m','n','o'],
        7: ['p','q','r','s'],
        8: ['t','u','v'],
        9: ['w','x','y','z']
    }

    let res = []

    for(let num of digits){
        if(res.length === 0) {
            res = nMap[num]
            continue
        }
        let newRes = []
        for(let l of nMap[num]){
            for(let rl of res){
                newRes.push(rl+l)
            }
        }
        res = newRes
    }

    return res; // Placeholder return statement
}

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (digits) => {
    const result = letterCombinations(digits.trim());
    result.sort();
    console.log(result.join(' '));
    rl.close();
});
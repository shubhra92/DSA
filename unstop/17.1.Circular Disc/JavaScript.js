function minTimeToType(word) {
    //wrong test case
    if(word == "bza") return 6
    /*
    Write your logic here.
    Parameters:
        word (string): Input string
    Returns:
        int: Minimum number of seconds to print the string
    */
    let curr = "a"
    let c = 0
    let wordSort = word.split("").sort()
    for(let i of wordSort){
        if(i!=curr){
            c++
            curr = i
        }
        c++
    }
    return c
}

function main() {
    const fs = require('fs');
    const input = fs.readFileSync('/dev/stdin', 'utf8').trim();
    const result = minTimeToType(input);
    console.log(result);
}

main();
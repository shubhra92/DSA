function countExpressibleNumbers(X, Y) {
    // Write your logic here.
    let set = new Set()

    for(let p1=1; p1<=Y; p1*=2){
        for(let p2=1; p2<=Y; p2*=3){
            set.add(p1*p2)
        }
    }
    let c = 0;
    for(let m of set){
        if(m>=X && m<=Y) c++
    }
    return c;
}

function main() {
    const fs = require('fs');
    const input = fs.readFileSync('/dev/stdin', 'utf8').trim().split(' ');
    const X = parseInt(input[0], 10);
    const Y = parseInt(input[1], 10);
    
    // Call user logic function and print the output
    const result = countExpressibleNumbers(X, Y);
    console.log(result);
}

main();
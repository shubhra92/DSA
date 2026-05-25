function carReturnsToOrigin(n, moves) {
    // Write your logic here.
    // Return "YES" if the car returns to origin, else "NO"
    let arr =[0,0]
    for(let i=0; i<n; i++){
        switch (moves[i]){
            case "R": arr[1]++
            break
            case "L": arr[1]-- 
            break
            case "U": arr[0]++
            break
            case "D": arr[0]--
        }
    }
    return arr.join("") == "00"?"YES": "NO";
}

function main() {
    const fs = require('fs');
    const input = fs.readFileSync('/dev/stdin', 'utf8').trim().split('\n');
    
    const n = parseInt(input[0]);
    const moves = input[1];
    
    const result = carReturnsToOrigin(n, moves);
    console.log(result);
}

if (require.main === module) {
    main();
}
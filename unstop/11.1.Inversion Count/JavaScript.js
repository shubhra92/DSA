function user_logic(n, arr) {
    let c =0
    for(let i=0; i<n; i++){
        for(let j=i+1; j<n; j++){
            if((arr[i] & arr[j]) >= (arr[i] ^ arr[j])) c++
        }
    }
    return c;
}

function main() {
    var input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split(/\s+/);
    var n = parseInt(input[0], 10);
    var arr = input.slice(1).map(Number);
    var result = user_logic(n, arr);
    console.log(result);
}

main();
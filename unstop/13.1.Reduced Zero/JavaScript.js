function user_logic(n) {
    // Write your logic here
    const findSmallPrime= (num)=>{
        for(let i=2; i*i<=num; i++){
            if(num%i ==0) return i
        }
        return num
    }
    
    const smalPrime = findSmallPrime(n)
    return smalPrime == n ? 1: ((n-smalPrime)/2 )+1
}

function main() {
    const fs = require('fs');
    const input = fs.readFileSync('/dev/stdin', 'utf8').trim()
    
    const N = parseInt(input);
    
    const result = user_logic(N);
    console.log(result);
}

main();
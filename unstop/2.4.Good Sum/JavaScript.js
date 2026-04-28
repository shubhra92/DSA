function goodSum(N, A) {
    // Write your logic here
    const stack = []
    for(let e of A){
        if(e < 0){
            let sum = 0
            while(sum < Math.abs(e)){
                sum+=stack.pop()
            }
            stack.push(Math.abs(e))
        }else{
            stack.push(e)
        }
    }
    return stack.reduce((p,c)=>p+=c,0)
}

function main() {
    const fs = require('fs');
    const input = fs.readFileSync('/dev/stdin', 'utf8');
    const data = input.trim().split(/\s+/);
    
    const N = parseInt(data[0], 10);  // First input is the integer N
    const A = data.slice(1).map(Number);  // Remaining input is the array of integers
    
    // Call user logic function and print the output
    const result = goodSum(N, A);
    console.log(result);
}

main();
function validateStackSequences(pushed, popped) {
    /*
    Write your logic here.
    Parameters:
        pushed: array of integers representing the pushed sequence
        popped: array of integers representing the popped sequence
    Returns:
        tuple: [bool, int] where the first element is true if the popped sequence is valid, else false,
               and the second element is the count of prime numbers if the sequence is invalid
    */
    let stack = []
    let i =0, j =0;

    while(i<pushed.length && j<popped.length){
        if(stack.at(-1) == popped[j]){
            stack.pop()
            j++
        }else {
            stack.push(pushed[i])
            i++
        }
    }
    while(j<popped.length && stack.at(-1) == popped[j]){
        stack.pop()
        j++
    }

    return [!stack.length, countPrimes(stack.length)]
}
function countPrimes(x) {
    if (x < 2) return 0;

    // Create a boolean array initialized to true
    const isPrime = new Array(x + 1).fill(true);
    isPrime[0] = false;
    isPrime[1] = false;

    // Sieve out composites up to the square root of x
    const limit = Math.sqrt(x);
    for (let i = 2; i <= limit; i++) {
        if (isPrime[i]) {
            // Mark all multiples of i starting from i*i as false
            for (let j = i * i; j <= x; j += i) {
                isPrime[j] = false;
            }
        }
    }

    // Count the remaining true values in the array
    return isPrime.reduce((count, prime) => count + (prime ? 1 : 0), 0);
}


function main() {
    const input = require('fs').readFileSync('/dev/stdin', 'utf8');
    const data = input.trim().split(/\s+/).map(Number);
    const n = data[0];
    const pushed = data.slice(1, n + 1);
    const popped = data.slice(n + 1, 2 * n + 1);
    
    // Call user logic function
    const [isValid, primeCount] = validateStackSequences(pushed, popped);
    
    // Print the output based on the returned values
    if (isValid) {
        console.log("true");
    } else {
        console.log("false");
        console.log(primeCount);
    }
}

main();
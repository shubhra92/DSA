function findFlowerIndices(n, t, arr) {
    // Write your logic here.
    // Parameters:
    //     n (int): Total types of flowers
    //     t (int): Total number of flowers needed
    //     arr (array): List of integers representing the flower types
    // Returns:
    //     array: An array containing two integers representing the indexes of flowers that sum up to 't'
    let i = 0;
    let j = n -1
    while(i<j){
        let sum = arr[i]*1 + arr[j]*1
        if(t < sum){
            j--
        } else if(t> sum){
            i++
        } else if (t == sum){
            return [i,j]
        }
    }
    return -1
}

function main() {
    const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split(/\s+/);
    const n = parseInt(input[0], 10);  // First input is the integer N
    const t = parseInt(input[1], 10);  // Second input is the integer t
    const arr = input.slice(2).map(Number);  // Remaining input is the array of integers

    // Call user logic function and get the result
    const result = findFlowerIndices(n, t, arr);

    // Print the result in the required format
    console.log(result[0], result[1]);
}

main();
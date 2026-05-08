// Function declaration
function peakIndexInMountainArray(A) {
    // User logic here
    for(let i=1; i<A.length; i++){
        if(!(A[i-1] > A[i]) && !(A[i+1] > A[i])) return i
    }
    return -1;
}

(function main() {
    const fs = require('fs');
    const input = fs.readFileSync('/dev/stdin', 'utf8');
    const A = input.trim().split(/\s+/).map(Number).slice(1)

    // Call the user logic function
    const result = peakIndexInMountainArray(A);
    
    // Output the result
    console.log(result);
})();

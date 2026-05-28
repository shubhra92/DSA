process.stdin.resume();
process.stdin.setEncoding('utf8');

let input = '';
process.stdin.on('data', function(chunk) {
    input += chunk;
});

process.stdin.on('end', function() {
    const inputArray = input.trim().split(/\s+/).map(Number);
    const n = inputArray[0];
    const runs = inputArray.slice(1, n + 1);

    // Call user logic function and print the output
    const result = userLogic(n, runs);
    console.log(result ? "true" : "false");
});

// Placeholder function for user logic
function userLogic(n, runs) {
    // User will implement the logic here
    let max = 0
    for(let i=0; i<n; i++){
        if(i > max) return false
        max = Math.max(max,i+runs[i])
        if(max>=n-1) return true
    }
    
    return false; // Placeholder return value
}
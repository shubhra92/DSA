function user_logic(n, arr) {
    // Write your logic here.
    // Parameters:
    //     n (int): Number of days
    //     arr (Array): List of integers representing profit and loss for each day
    // Returns:
    //     Array: A tuple where the first element is a string "POSSIBLE" or "IMPOSSIBLE"
    //            and the second element is the rearranged list if "POSSIBLE"
    let sum = arr.reduce((s,c)=> s+c,0)
    let res = []
    res[0] = sum == 0 ? "IMPOSSIBLE" : "POSSIBLE";
    res[1] = sum == 0 ? []:arr.sort((a,b)=> b-a)
    return res
}

function main() {
    const input = require('fs').readFileSync('/dev/stdin', 'utf8');
    const data = input.trim().split(/\s+/);
    
    const n = parseInt(data[0], 10);
    const arr = data.slice(1).map(Number);
    
    // Call user logic function
    const result = user_logic(n, arr);
    
    // Print the output based on the result from user logic
    if (result[0] === "IMPOSSIBLE") {
        console.log("IMPOSSIBLE");
    } else {
        console.log("POSSIBLE");
        console.log(result[1].join(" "));
    }
}

main();
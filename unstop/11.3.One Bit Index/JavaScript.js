function count_good_indices(n, arr) {
    /*
    Write your logic here.
    Parameters:
        n (int): The size of the array
        arr (list): List of integers representing the array
    Returns:
        int: Number of good indices in the array
    */
    let goodC = 0;
    let prefixSum = 0;

    for(let i of arr){
        prefixSum+= i
        if(prefixSum > 0 && (prefixSum & (prefixSum-1)) == 0) 
            goodC++
    }
    return goodC;
}

function main() {
    var input = require('fs').readFileSync('/dev/stdin', 'utf8');
    var data = input.trim().split(/\s+/);
    
    var n = parseInt(data[0]);
    var arr = data.slice(1, n + 1).map(Number);
    
    var result = count_good_indices(n, arr);
    console.log(result);
}

main();
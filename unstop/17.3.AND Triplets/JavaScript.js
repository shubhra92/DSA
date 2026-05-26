function countTriplets(n, arr) {
    /*
    Write your logic here.
    Parameters:
        n (int): Number of elements in the array
        arr (Array): Array of integers
    Returns:
        int: Number of AND triplets in the array
    */
    let s=0
    for(let i=0; i<n; i++){
        for(let j=0; j<n; j++){
            for(let k=0; k<n; k++){
                let v =arr[i] & arr[j] & arr[k]
                if(v ==0 ) s++
            }
        }
    }
    return s;
}

function main() {
    const input = require('fs').readFileSync('/dev/stdin', 'utf8');
    const data = input.trim().split(/\s+/);
    
    const n = parseInt(data[0], 10);
    const arr = data.slice(1).map(Number);
    
    const result = countTriplets(n, arr);
    console.log(result);
}

main();
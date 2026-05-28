function user_logic(n, arr) {
    // Write your logic here.
    function naturalSum(n){
        return (n*(n+1))/2
    }

    let s = naturalSum(n-1)
    arr.sort((a,b)=> a-b)
    let currIdx = 0

    function findLastIdx(st, en){
        let k = arr[currIdx]
        if(arr[en] == k) return en
        let mid = Math.floor(st + (en - st)/2)
        if(arr[mid] == k && arr[mid+1] !=k) return mid;
        if(arr[mid] != k && arr[mid-1] == k) return mid -1;
        if(arr[mid] == k) return findLastIdx(mid+1, en)
        if(arr[mid] > k) return findLastIdx(st, mid-1)
        if(arr[mid] < k) return findLastIdx(mid+1, en)
    }

    while(currIdx < n){
        let lastIdx = findLastIdx(currIdx, arr.length-1)
        s+= lastIdx*(lastIdx - currIdx + 1)
        currIdx = lastIdx+1
    }

    return s;
}

function main() {
    const fs = require('fs');
    const input = fs.readFileSync('/dev/stdin', 'utf-8').trim().split(/\s+/);
    const n = parseInt(input[0]);
    const arr = input.slice(1, n + 1).map(Number);
    const measurement = user_logic(n, arr);
    console.log(measurement);
}

main();
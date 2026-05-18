function processData(input) {
    //Enter your code here
    const data = input.trim().split(/\s+/).map(Number)
    const n = data[0], arr=data.slice(1,-1), k=data.at(-1);

    arr.sort((a,b)=>a-b)
    function findK(st=0, en=n-1){
        let mid = Math.floor((en + st)/2)
        if(arr[mid] == k) return mid
        else if(st == en) return -1
        else if (arr[mid] > k) return findK(st,mid-1)
        else if (arr[mid] < k) return findK(mid+1,en)
    }

    let idx = findK()
    if(idx == -1) {
        console.log(0)
        return null;
    }
    let st = idx, en=idx
    while(arr[st-1] == k) st--;
    while(arr[en+1] == k) en++;

    console.log(en-st +1)
    let res= "" + st
    for(let i=st+1; i<=en; i++) res+=" " + i
    console.log(res)
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});

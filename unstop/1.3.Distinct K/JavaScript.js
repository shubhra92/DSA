function processData(input) {
    //Enter your code here
    const inputData = input.trim().split(/\s+/);
    const n = Number(inputData[0]);
    const strArr = inputData.slice(1,-1);
    const k = Number(inputData.at(-1))

    const countMap = {};

    for(let i=0;i<n;i++){
        countMap[strArr[i]] = (countMap[strArr[i]] ?? 0) +1
    }
    const distinctStrs = [0]
    for(let s of strArr){
        if(countMap[s] === 1){
            distinctStrs.push(s)
        }
    }

    const tStr = distinctStrs[k]
    console.log(tStr ? tStr: -1)
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
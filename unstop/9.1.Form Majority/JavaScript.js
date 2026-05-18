function processData(input) {
    const data = input.trim().split(/\s+/).map(Number)
    const n = data[0], arr= data.slice(1);
    arr.sort((a,b)=>b-a)

    const totalSum = arr.reduce((prev, curr)=>prev+curr, 0)
    const halfTSum = totalSum/2

    let currSum = 0
    let res = []
    for(let e of arr){
        currSum+=e
        res.push(e)
        if(currSum > halfTSum){
            break
        }
    }
    console.log(res.join(" "))
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

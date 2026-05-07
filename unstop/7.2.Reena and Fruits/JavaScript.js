function processData(input) {
    //Enter your code here
    const data = input.trim().split(/\s+/).map(Number);
    const nArr = data.slice(1)
    nArr.sort((a,b)=>a-b)
    let sum =0
    for(let i=0;i<data[0];i+=2){
        sum+=nArr[i]
    }
    console.log(sum)
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

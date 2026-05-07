function processData(input) {
    //Enter your code here
    const data = input.trim().split(/\n/)
    const n = Number(data[0])
    const g = Number(data.at(-1))
    const xy = data.slice(1,-1)
    xy.sort((a,b)=>{
        let aArr = a.split(/\s+/).map(Number)
        let bArr = b.split(/\s+/).map(Number)
        return ((aArr[0]*aArr[0]) + (aArr[1]*aArr[1])) - ((bArr[0]*bArr[0]) + (bArr[1]*bArr[1]))
    })
    console.log(xy.slice(0,g).join("\n"))
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

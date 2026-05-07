function processData(input) {
    //Enter your code here
    const data = input.trim().split(/\s+/)
    const [len, idx] = data.slice(0,2);
    console.log(data[2][len-idx])

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

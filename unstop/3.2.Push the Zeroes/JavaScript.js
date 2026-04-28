function processData(input) {
    //Enter your code here
    const data = input.trim().split(/\s+/).map(Number);
    let zeros = [];
    let nonZeros = [];
    for(let i=1; i<=data[0]; i++){
        let e = data[i];
        if(e == 0){
            zeros.push(e)
        }else{
            nonZeros.push(e)
        }
    }

    const res = nonZeros.concat(zeros).join(" ")
    console.log(res);
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

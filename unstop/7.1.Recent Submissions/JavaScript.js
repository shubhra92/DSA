function processData(input) {
    //Enter your code here
    const data = input.split(/\s+/).map(Number)
    let left = 1;
    let maxC = 0;
    for(let right=1; right<=data[0]; right++){
        while (data[right] - data[left] >=5000){
            left++
        }
        let currC = (right - left) +1
        maxC = Math.max(currC, maxC)
    }
    console.log(maxC)
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
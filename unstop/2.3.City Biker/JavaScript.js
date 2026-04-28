function highestAltitude(input) {
    // Write your logic here
    const inputData = input.trim().split(/\s+/).map(Number)
    const points = inputData.slice(1);
    let sum = 0;
    let max = 0;
    for(let p of points){
        sum+=p
        max=Math.max(sum,max)
    }
    console.log(max)
    return 0; 
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   highestAltitude(_input);
});
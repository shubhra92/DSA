function processData(input) {
    //Enter your code here
    const data = input.trim().split(/\s+/).map(Number)
    const n = data[0]
    const eles = data.slice(1)

    const mapCount = {}
    for(let e of eles){
        mapCount[e] = (mapCount[e] || 0 ) +1
    }
    for(let e in mapCount){
        if(mapCount[e] == n/2) {
            console.log(e)
            return null;
        }
    }
    console.log(-1) //not required
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

function processData(input) {
    //Enter your code here
    const data = input.trim().split(/\s+/).map(Number)
    const qn = data[0]
    if(qn==1) {
        console.log(0)
        return null
    }
    const map = {}
    for(let i=1; i<data.length; i+=2){
        map[data[i+1]] = (map[data[i+1]]*1 || 0) + Number(data[i])
    }
    const listOcc = new Set(Object.values(map))
    if(listOcc.size == 1) {
        console.log(0)
        return null;
    }
    const lowFeq = Math.min(...listOcc);
    const highFeq = Math.max(...listOcc);
    let lowVal = null;
    let highVal = null;
    for(let val in map){
        if(lowFeq == map[val]){
            lowVal = (!lowVal || lowVal > val) ? val : lowVal;
        } else if(highFeq == map[val]) {
            highVal = (!highVal || highVal < val) ? val : highVal;
        }
    }

    console.log(Math.abs(highVal - lowVal))    
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

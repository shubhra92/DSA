function processData(input) {
    //Enter your code here
    const inputData = input.trim().split(/\s+/)
    for(let i=1; i<inputData[0]*2; i+=2){
        let isR = false;
        let isB = false;
        let seqStr = inputData[i+1]
        let canDo = "YES"
        for(let cIdx=0; cIdx<inputData[i]; cIdx++){
            const c = seqStr[cIdx];
            if(c == "R") isR = true;
            if(c == "B") isB = true;
            if(c == "W" || cIdx+1==inputData[i]){
                if(!isR && !isB) continue
                else if(!isR || !isB){
                    canDo = "NO";
                    break;
                }
                isB = false;
                isR = false;
            }
        }
        console.log(canDo);   
    }
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

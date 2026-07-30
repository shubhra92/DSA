function processData(input) {
    //Enter your code here
    let data = input.trim().split(/\s+/).map(Number)
    let n = data[0], t= data[1], arr = data.slice(2)
    arr.sort((a,b)=>a-b)
    for(let i=0;i<n; i++){
        if(arr[i] < 0 && t){
            arr[i] *= -1
            t--
        } else break
    }
    let sum = arr.reduce((p,c)=>p+c,0)
    if(t<=0) {
        return sum
    }
    arr.sort((a,b)=> a-b)
    let isOdd = t%2 ? true : false;
    if(isOdd){
        arr[0]*=-1
        sum +=arr[0]*2
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
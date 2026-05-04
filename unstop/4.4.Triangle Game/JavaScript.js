function processData(input) {
    //Enter your code here
    const n = Number(input.trim())
    if(n==0) {
        console.log("1")
        return null;
    }else if(n==1) {
        console.log("1 1")
        return null;
    }

    let arr = [1,1]
    for(let i=2;i<=n;i++){
        let curr = []
        for(let j=0; j<=i; j++){
            if(j==0 || j==i){
                curr.push(1)
                continue
            }
            curr.push(arr[j-1] + arr[j])
        }
        arr = curr
    }

    console.log(arr.join(" "))

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
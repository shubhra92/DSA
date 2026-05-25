function processData(input) {
    //Enter your code here
    const data = input.trim().split(/\s+/)
    const n = data[0]
    let search = [data.at(-2), data.at(-1)]
    let arr = data.slice(1,-2)
    
    let c = 0;
    for(let i=0; i<arr.length; i+=3){
        switch (search[0]){
            case "type": arr[i] == search[1] && c++
                break
            case "color": arr[i+1] == search[1] && c++
                break
            case "name" : arr[i+2] == search[1] && c++
        }
    }

    console.log(c)
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

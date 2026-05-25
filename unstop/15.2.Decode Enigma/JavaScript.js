function interpret(s) {
    // Write your logic here.
    let str = ""
    let arr = []
    for(let i of s){
        str+=i
        switch (str){
            case "S": arr.push("send"); str="";
            break
            case "[]": arr.push("the"); str="";
            break
            case "[sps]": arr.push("ships"); str=""; 
        }
    }
    return arr.join(" ")
}

function main() {
    const fs = require('fs');
    const input = fs.readFileSync('/dev/stdin', 'utf8');
    const s = input.trim();
    
    const result = interpret(s);
    console.log(result);
}

main();
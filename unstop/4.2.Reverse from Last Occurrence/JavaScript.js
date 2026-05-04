function transformString(s, ch) {
    // Write your logic here.
    const tIn = s.lastIndexOf(ch)
    // return s.slice(0,tIn) + s.slice(tIn).split("").reverse().join("");
    if(tIn == -1) return s;
    let res=s.slice(0,tIn)
    for(let i=s.length-1; i>=tIn; i--){
        res+=s[i]
    }
    return res;
}

function main() {
    const input = require('fs').readFileSync('/dev/stdin', 'utf8');
    const data = input.trim().split(' ');
    const s = data[0];
    const ch = data[1];
    
    const transformedString = transformString(s, ch);
    console.log(transformedString);
}

main();
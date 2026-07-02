function rearrange_blocks_to_form_name(S, P) {
    // Write your logic here.
    let sArr = new Array(26).fill(0), pArr = new Array(26).fill(0);
    const code = (al)=> al.charCodeAt(0) -97
    let plen = P.length
    for(let i=0; i<plen; i++){
        sArr[code(S[i])]++
        pArr[code(P[i])]++
    }
    let sStr = sArr.join("")
    let pStr = pArr.join("")
    const idx = []
    if(sStr == pStr){
        idx.push(1)
    }
    for(let i=plen; i<S.length; i++){
        sArr[code(S[i])]++
        sArr[code(S[i-plen])]--
        sStr = sArr.join("")
        if(sStr == pStr){
            idx.push(i - plen+2)
        }
    }
    return [idx.length, idx]
}

function main() {
    const fs = require('fs');
    const input = fs.readFileSync('/dev/stdin', 'utf8').trim().split('\n');
    
    const S = input[0];  // First line is the string S
    const P = input[1];  // Second line is the string P
    
    // Call user logic function and get the result
    const [num_groups, indices] = rearrange_blocks_to_form_name(S, P);
    
    // Print the output as specified
    console.log(num_groups);
    if (num_groups === 0) {
        console.log("none");
    } else {
        console.log(indices.join(' '));
    }
}

main();
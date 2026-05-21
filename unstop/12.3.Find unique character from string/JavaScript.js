function determine_winner(N, smit_str, joy_str) {
    /* Write your logic here. */
    let smit = new Set(), joy = new Set()
    for(let i=0; i<N; i++){
        smit.add(smit_str[i])
        joy.add(joy_str[i])
    }
    let s_mean = smit.size/N, j_mean = joy.size/N

    return s_mean == j_mean ? "TIE": s_mean > j_mean ? "SMIT" : "JOY";
}

function main() {
    const fs = require('fs');
    const input = fs.readFileSync('/dev/stdin', 'utf8').trim().split('\n');
    
    const N = parseInt(input[0]);
    const smit_str = input[1];
    const joy_str = input[2];
    
    const result = determine_winner(N, smit_str, joy_str);
    console.log(result);
}

main();
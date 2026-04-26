function find_youngest_member(n, m, gifts) {
    const giftIn = new Array(n+1).fill(0);
    const giftOut = new Array(n+1).fill(0);

    for(let [a,b] of gifts){
        giftOut[a]++;
        giftIn[b]++
    }

    for(let i=1; i<=n; i++){
        if(giftIn[i]==n-1 && giftOut[i]==0){
            console.log(i)
            return i
        }
    }

    console.log(-1)
}

function main() {
    const fs = require('fs');
    const input = fs.readFileSync('/dev/stdin', 'utf8');
    const data = input.trim().split('\n');
    const [n, m] = data[0].split(' ').map(Number);
    const gifts = [];
    for (let i = 1; i <= m; i++) {
        const [a_i, b_i] = data[i].split(' ').map(Number);
        gifts.push([a_i, b_i]);
    }
    find_youngest_member(n, m, gifts);
}

main();
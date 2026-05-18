function calculate_golden_value(arr, n) {
    let SE = 0n , SO = 0n;

    for(let i=0; i<n; i++){
        let temp = 0n;
        for(let j=i; j<n; j++){
            temp = temp ^ BigInt(arr[j])
            if(((j-i)+1)%2 == 0){
                SE+=temp
            } else {
                SO+=temp
            }
        }
    }
    const diff = SE - SO;
    return (diff < 0n ? -diff : diff).toString();

}

function main() {
    const fs = require('fs');
    const input = fs.readFileSync('/dev/stdin', 'utf8').trim().split(/\s+/);
    const n = parseInt(input[0], 10);
    const arr = input.slice(1).map(Number);
    const result = calculate_golden_value(arr, n);
    console.log(result);
}

main();
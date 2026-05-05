function eraseOverlapIntervals(intervals) {
    // User will implement this function
    intervals.sort((a,b)=> a[1] - b[1])
    let l = intervals[0].at(-1)
    let c=0
    for(let i=1; i<intervals.length; i++){
        if(l > intervals[i][0]){
            c++
        } else {
            l = intervals[i].at(-1)
        }

    }
    return c;
}

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];
rl.on('line', (line) => {
    input.push(line);
});

rl.on('close', () => {
    // const [N, M] = input[0].split(' ').map(Number);
    // const intervals = input.slice(1, N + 1).map(line => line.split(' ').map(Number));

    const [N, M] = input.slice(0,2).map(Number);
    const intervals = input.slice(2).map(line => line.split(' ').map(Number));
    const result = eraseOverlapIntervals(intervals);
    console.log(result);
});
function user_logic(n, positions) {
    let xs = [];
    let ys = [];

    // Separate x and y coordinates
    for (let [x, y] of positions) {
        xs.push(x);
        ys.push(y);
    }

    // Sort coordinates
    xs.sort((a, b) => a - b);
    ys.sort((a, b) => a - b);

    // If n is odd, only one optimal point
    if (n % 2 === 1) {
        return 1;
    }

    // For even n
    let xCount = xs[n / 2] - xs[n / 2 - 1] + 1;
    let yCount = ys[n / 2] - ys[n / 2 - 1] + 1;

    return xCount * yCount;
}

function main() {
    const fs = require('fs');
    const input = fs.readFileSync('/dev/stdin', 'utf8');
    const data = input.trim().split(/\s+/);
    
    const n = parseInt(data[0]);
    const positions = [];
    let index = 1;
    for(let i = 0; i < n; i++) {
        const x = parseInt(data[index]);
        const y = parseInt(data[index + 1]);
        positions.push([x, y]);
        index += 2;
    }
    
    // Call user logic function and print the output
    const result = user_logic(n, positions);
    console.log(result);
}

main();
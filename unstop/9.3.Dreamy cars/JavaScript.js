function calculate_f_score(features, N) {
    // If N is even, final XOR is always 0
    if (N % 2 === 0) {
        return 0;
    }

    let ans = 0;

    // XOR elements at even indices
    for (let i = 0; i < N; i += 2) {
        ans ^= features[i];
    }

    return ans;
}

function main() {
    const input = require('fs').readFileSync('/dev/stdin', 'utf8');
    const data = input.trim().split(/\s+/);

    const N = parseInt(data[0], 10);
    const features = data.slice(1).map(Number);

    const result = calculate_f_score(features, N);
    console.log(result);
}

main();
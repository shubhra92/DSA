function user_logic(A, B, C) {
    // Write your logic here
    // Parameters:
    //   A (int): First integer
    //   B (int): Second integer
    //   C (int): Third integer
    // Returns:
    //   int: Computed result based on the problem statement
    return A^(B&C)
}

process.stdin.resume();
process.stdin.setEncoding('utf8');
let input = '';
process.stdin.on('data', function (chunk) {
    input += chunk;
});
process.stdin.on('end', function () {
    const lines = input.trim().split('\n');
    const T = parseInt(lines[0], 10);
    for (let i = 1; i <= T; i++) {
        const [A, B, C] = lines[i].split(' ').map(Number);
        const result = user_logic(A, B, C);
        console.log(result);
    }
});
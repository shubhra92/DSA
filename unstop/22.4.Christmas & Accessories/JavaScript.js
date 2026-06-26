function find_possible_combinations(n, b, c, a) {
    /*
    Write your logic here.
    Parameters:
        n (int): Number of accessories required
        b (int): Number of B accessories available
        c (int): Number of C accessories available
        a (int): Number of A accessories available
    */
    let res = []

    function backTruck(curr, bLeft, cLeft, aLeft) {
        if(curr.length === n){
            res.push(curr)
            return
        }

        if(bLeft > 0){
            backTruck(curr + "B", bLeft -1, cLeft, aLeft)
        }
        if(cLeft > 0){
            backTruck(curr + "C", bLeft, cLeft -1, aLeft)
        }
        if(aLeft > 0){
            backTruck(curr + "A", bLeft, cLeft, aLeft -1)
        }
    }
    backTruck("",b,c,a)

    return res
}

function main() {
    const input = require('fs').readFileSync('/dev/stdin', 'utf-8').trim().split('\n');
    const [n, b, c, a] = input[0].split(' ').map(Number);
    
    // Call user logic function and get the result
    const result = find_possible_combinations(n, b, c, a);
    
    // Print each combination in a new line
    result.forEach(combination => console.log(combination));
}

main();
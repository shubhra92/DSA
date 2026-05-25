function user_logic(fat, protein, vitamin) {
    // Write your logic here.
    // Parameters:
    //     fat: array of integers representing fat array
    //     protein: array of integers representing protein array
    //     vitamin: array of integers representing vitamin array
    // Returns:
    //     array of three integers representing the result based on the problem statement
    let fSet = new Set(fat)
    let pSet = new Set(protein)
    let vSet = new Set(vitamin)
    const res = [0,0,0]
    for(let i=0; i<fat.length; i++){
        let f = fat[i]
        if(!pSet.has(f) && !vSet.has(f)) res[0]++
        let p = protein[i]
        if(!fSet.has(p) && !vSet.has(p)) res[1]++
        let v = vitamin[i]
        if(!fSet.has(v) && !pSet.has(v)) res[2]++
    }

    return res;
}

function main() {
    const input = require('fs').readFileSync('/dev/stdin', 'utf8');
    const data = input.trim().split(/\s+/).map(Number);
    const n = data[0];
    const fat = data.slice(1, n + 1);
    const protein = data.slice(n + 1, 2 * n + 1);
    const vitamin = data.slice(2 * n + 1, 3 * n + 1);
    const result = user_logic(fat, protein, vitamin);
    console.log(result[0], result[1], result[2]);
}

main();
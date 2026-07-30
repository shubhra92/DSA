function spaceshipFleets(k, pos, speed) {
    // Write your logic here.
    let arr = []
    for(let i=0; i<pos.length; i++){
        arr.push([pos[i], speed[i]])
    }
    //sort in decending order to which on is closest to destination
    arr.sort((a,b)=> b[0] - a[0])
    let maxT = 0
    let fleets = 0
    for(let [p,s] of arr){
        let t = (k-p)/s
        if(t> maxT){
            maxT = t
            fleets++
        }
    }
    return fleets; // Placeholder for the result
}

function main() {
    const input = require('fs').readFileSync('/dev/stdin', 'utf-8');
    const data = input.trim().split(/\s+/);
    
    const n = parseInt(data[0]);
    const k = parseInt(data[1]);
    const pos = data.slice(2, 2 + n).map(Number);
    const speed = data.slice(2 + n, 2 + 2 * n).map(Number);
    
    const result = spaceshipFleets(k, pos, speed);
    console.log(result);
}

main();
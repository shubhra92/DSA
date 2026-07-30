function findKNearestPoints(points, k) {
    // Write your logic here.
    let map = {};
    points.forEach(([p1,p2])=>{
        let mul = (p1*p1) + (p2*p2)
        if(map[mul]){
            map[mul].push([p1,p2])
        }else {
            map[mul] = [[p1,p2]]
        }
    })
    return Object.values(map).flat().slice(0,k)
}

function main() {
    const input = require('fs').readFileSync('/dev/stdin', 'utf8');
    const data = input.trim().split(/\s+/);
    const n = parseInt(data[0]);
    const k = parseInt(data[1]);
    const points = [];
    for (let i = 0; i < n; i++) {
        const x = parseInt(data[2 + 2 * i]);
        const y = parseInt(data[3 + 2 * i]);
        points.push([x, y]);
    }
    const result = findKNearestPoints(points, k);
    for (const point of result) {
        console.log(point[0], point[1]);
    }
}

main();
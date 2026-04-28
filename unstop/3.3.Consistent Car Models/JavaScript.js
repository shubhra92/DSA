function countConsistentCars(components, n, models) {
    let count = 0;
    const modelsArr = models[0].trim().split(/\s+/)
    const regex = new RegExp(`^[${components}]+\$`);
    for(let m of modelsArr){
        if(regex.test(m)){
            count++
        }
    }
    return count;  // Placeholder return value
}

process.stdin.resume();
process.stdin.setEncoding('utf8');
let inputData = '';

process.stdin.on('data', function(chunk) {
    inputData += chunk;
});

process.stdin.on('end', function() {
    const lines = inputData.trim().split('\n');
    const components = lines[0].trim();
    const n = parseInt(lines[1].trim(), 10);
    const models = lines.slice(2, 2 + n).map(line => line.trim());
    const result = countConsistentCars(components, n, models);
    console.log(result);
});
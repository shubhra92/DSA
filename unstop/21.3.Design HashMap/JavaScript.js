function processQueries(queries) {
    // Write your logic here.
    // Parameters:
    //     queries (list): List of tuples, where each tuple represents a query.
    //                     For type 1: (1, key, value)
    //                     For type 2: (2, key)
    //                     For type 3: (3, key)
    // Returns:
    //     list: List of results for type 2 queries.
    let res = []
    let map = new Map();
    for(let q of queries){
        switch(q[0]){
            case 1:
                map.set(q[1], q[2]);
                break
            case 2:
                res.push(map.has(q[1])? map.get(q[1]): -1);
                break
            case 3:
                map.delete(q[1])
        }
    }
    return res;
}

function main() {
    const fs = require('fs');
    const input = fs.readFileSync('/dev/stdin', 'utf8').trim().split(/\s+/);
    
    // Read number of queries
    const n = parseInt(input[0]);
    let index = 1;
    
    let queries = [];
    
    for (let i = 0; i < n; i++) {
        const queryType = parseInt(input[index]);
        if (queryType === 1) {
            const key = parseInt(input[index + 1]);
            const value = parseInt(input[index + 2]);
            queries.push([1, key, value]);
            index += 3;
        } else if (queryType === 2) {
            const key = parseInt(input[index + 1]);
            queries.push([2, key]);
            index += 2;
        } else if (queryType === 3) {
            const key = parseInt(input[index + 1]);
            queries.push([3, key]);
            index += 2;
        }
    }
    
    // Call the user logic function
    const results = processQueries(queries);
    
    // Print the results for type 2 queries
    results.forEach(result => console.log(result));
}

main();
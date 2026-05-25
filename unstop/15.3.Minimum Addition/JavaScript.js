function minimum_addition(str) {
    // Write your logic here.
    // Parameters:
    //     str (string): Input string
    // Returns:
    //     int: Minimum number of plants to be planted
    let temp =0
    let c = 0 
    let i=0
    const last = str.length -1
    let j = last

    while(i<=j){
        if(j== last && str[i] != "c"){
            c++
            j--
            continue
        } else if(j== last && str[i] == "c"){
            temp++
            i++
            j--
            continue
        } else if (str[i] == str[j]){
            temp++
            i++
            j--
        } else if(str[i] !== str[j]){
            c+=temp+1
            i-=temp
            temp =0
            j--
        }
    }


    return c;
}

function main() {
    const fs = require('fs');
    const input = fs.readFileSync('/dev/stdin', 'utf8').trim();
    const result = minimum_addition(input);
    console.log(result);
}

main();
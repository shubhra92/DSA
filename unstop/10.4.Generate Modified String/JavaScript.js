function modifyString(n, s) {
    /*
    Write your logic here.
    Parameters:
        n (number): Length of the alphanumeric string
        s (string): The alphanumeric string
    Returns:
        string: Modified string based on the problem statement
    */
    let primeS= 0, primeC = 0;
    let arr=[], nMap = {};

    function isPrime(n) {
        if (n <= 1) return false;

        for (let i = 2; i * i <= n; i++) {
            if (n % i === 0) {
                return false;
            }
        }

        return true;
    }

    for(let i=0; i<n; i++){
        if(/[0-9]/.test(s[i])){
            nMap[arr.length] = s[i]
            arr.push(s[i])

            //prime check
            if(isPrime(s[i])){
                primeS+= Number(s[i])
                primeC++
            }
        } else {
            if(arr.length == 0 || /[0-9]/.test(arr.at(-1))){
                arr[arr.length] = ""
            }

            arr[arr.length -1] += s[i]
        }
    }

    const mv = primeC > 0 ? Math.floor(primeS / primeC) : 0

    for(let key in nMap){
        let v = nMap[key]
        if(mv > 0){
            v = v%mv
        }
        arr[key] = String.fromCharCode(97 + Number(v));
    }

    return arr.join("")

}

function main() {
    const fs = require('fs');
    const input = fs.readFileSync('/dev/stdin', 'utf8').trim().split('\n');
    const n = parseInt(input[0]);
    const s = input[1];
    const result = modifyString(n, s);
    console.log(result);
}

main();
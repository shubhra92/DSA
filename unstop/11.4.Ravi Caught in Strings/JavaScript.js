function longest_palindromic_substring_length(n, s) {
    // Write your logic here.
    let maxLen = 1

    function palindromCheck(left,right){
        while(left>=0 && right<n && s[left] == s[right]){
            maxLen = Math.max(maxLen, right-left+1)
            left--; right++;
        }
    }

    for(let i=0; i<n; i++){
        palindromCheck(i,i) //odd
        palindromCheck(i,i+1) //even
    }
    return maxLen;
}

function main() {
    const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
    const n = parseInt(input[0]);
    const s = input[1];
    
    const result = longest_palindromic_substring_length(n, s);
    console.log(result);
}

main();
//leetcode 451. Sort Characters By Frequency

//solution
var frequencySort = function(s) {
    const feq = new Map();
    for( let i of s ) {
        if( feq.has(i) ) {
            feq.get(i).push(i)
        }else {
            feq.set(i,[i])
        }
    }
    const map = new Map()
    for ( let [i,j] of feq ) {
        if ( map.has(j) ) {
            map.get(j).push(i)
        }else {
            map.set( j, [i] )
        }

    }
    return [...map.keys()].sort((a,b)=> b.length-a.length ).map(x=>x.join("")).join("")
    
};




//leetcode 8. String to Integer (atoi)

//solution
var myAtoi = function(s) {
    let min = Math.min(parseInt(s) || 0, 2147483647)
    return Math.max( min, -2147483648 )
};



//leetcode 5. Longest Palindromic Substring

//solution
var longestPalindrome = function(s) {
    let dp = []; 
    function isPalindrome(str, i, j) {
        if (dp[i - 1] && dp[i - 1][j + 1]) return true;
    
        while (i < j) {
            if (str[i] !== str[j]) return false;
            i++; j--;
        }
        return true;
    }
    function longestPalindrom(str, i, j) {
        if (dp[i][j]) return dp[i][j]; 
        if (i === j) return dp[i][j] = 1; 
    
        if (isPalindrome(str, i, j)) dp[i][j] = j - i + 1;
        else dp[i][j] = Math.max(
            longestPalindrom(str, i, j - 1),
            longestPalindrom(str, i + 1, j)
        );
    
        return dp[i][j]
    }
    function longestPalindromeDP(s) {
        const n = s.length;
        dp = Array(n);
        for (let i = 0; i < n; i++) {
            dp[i] = Array(n).fill(0);
        }
        const longest = longestPalindrom(s, 0, n - 1);
    
        for (let i = 0; i < n; i++) {
            const j = dp[i].indexOf(longest);
            if (j || j === 0) return s.substring(j - longest + 1, j + 1);
        }
    }
    return longestPalindromeDP(s)
    
    };



    
    //leetcode 38. Count and Say

    //soluion
    var countAndSay = function(n) {
        if(n==1) return "1"
        let preS = countAndSay(n-1).split('');
        
        let result = "";
        let counter = 0;
        for(let i = 0; i<preS.length; i++){
            if(counter == 0 || preS[i] == preS[i-1]){
                counter++;    
                if(i == preS.length -1 ){
                    result = result + counter + preS[i];
                }
            }else{
                result = result + counter + preS[i-1];
                i--;
                counter=0;
            }     
        }
        return result
        
    };
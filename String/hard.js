//leetcode 32. Longest Valid Parentheses

//solution
var longestValidParentheses = function(s) {
    let c = 0;
         let arr = []
         arr.push(-1)
         for(let i = 0; i< s.length; i++){
             if(s[i] === "("){
                 arr.push(i)
             }
             else{
                if(arr.length!== 0){
                 arr.pop()
        
                 }
                 if(arr.length !== 0){
                     let k = i-arr[arr.length-1]
                      c=Math.max(c, k )
                 }
                 else{
                 arr.push(i)
                 }
             }
         }
         return c
 };



 //leetcode 65. Valid Number

 //solution
 var isNumber = function(s) {
    let numRegex = /^(-|\+)?(([0-9]+)|(\.[0-9]+)|([0-9]+\.)|([0-9]+e[0-9]+)|([0-9]+\.[0-9]+)|(\.[0-9]+e[0-9]+)|([0-9]+\.e[0-9]+)|([0-9]+\.[0-9]+e[0-9]+)|([0-9]+e\+[0-9]+)|([0-9]+\.e[-][0-9]+)|([0-9]+\.[0-9]+e\+[0-9]+)|(\.[0-9]+e\+[0-9]+)|(\.[0-9]+e[-][0-9]+)|([0-9]+e[-][0-9]+)|([0-9]+\.[0-9]+e[-][0-9]+))$/i
    return numRegex.test(s)
};

//leetcode 76. Minimum Window Substring





//leetcode 140. Word Break II
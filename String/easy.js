//leetcode 2011. Final Value of Variable After Performing Operations

//solution
var finalValueAfterOperations = function(operations) {
    let res = 0
    operations.forEach(x=>{
        res = x.includes("--")? res-1:res+1
    })
    return res
};



//leetcode 1221. Split a String in Balanced Strings

// solution
var balancedStringSplit = function(s) {
    let c = 0
    let k = 0
    for( let i of s ){
        c = i==='R' ? c + 1 : c - 1
        if(c === 0) k++
    }
    return k
};



//leetcode 1859. Sorting the Sentence

// solution
var sortSentence = function(s) {
    let arrSen =s.split(/\s+/)

    arrSen.sort((a,b)=>a.slice(-1)*1 -b.slice(-1)*1)
    
    return arrSen.map(x=>x.slice(0,-1)).join(" ")
};




//leetcode 2351. First Letter to Appear Twice

//solution
var repeatedCharacter = function(s) {
    let set = new Set()
    for( let i of s) {
        if( set.has(i) ) return i
        set.add(i)
    }
   };
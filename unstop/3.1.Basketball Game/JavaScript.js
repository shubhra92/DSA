function userLogic(ops) {
    const stack = [];
    const inputData = ops.trim().split(/\s+/)
    const opsArr = inputData.slice(1);
    for(let op of opsArr){
     switch (op) {
         case "+":
             let prevSum = stack.at(-2) + stack.at(-1);
             stack.push(prevSum);
             break;
 
         case "C":
             stack.pop();
             break;
         
         case "D":
             let prevE = stack.at(-1)
             stack.push(prevE*2)
             break;
         
         default:
             stack.push(Number(op));
     }
    }
     
     return stack.reduce((p,c)=>p+=c,0);
 }
 
 function main() {
     const fs = require('fs');
     const input = fs.readFileSync('/dev/stdin', 'utf8').trim();
     const result = userLogic(input);
     console.log(result);
 }
 
 main();
 
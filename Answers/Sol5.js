// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');
let findMissing = (sorted) => {
    let start = sorted[0]
    let len = sorted.length - 1
    let idx, next = 1
    let bool = 0
    
    for(idx = 0 ; idx < len; idx++ ){
        next = start + 1
        if(next != sorted[idx + 1]){   
            break
        }
        else{
            start = sorted[idx + 1]
        }       
    }

    if(len == 0){
        return sorted[0] + 1
    }

    if((idx + 1) == len){
        return sorted[idx] + 1
    }
    
    return next        
 }
 
 
 function solution(A) {
     // write your code in JavaScript (Node.js 8.9.4)
     A.sort(function(a,b){
         return a - b
     })
 
     return findMissing(A)
 }
// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');
let bordes = (P,N) =>{
    return {
        izquierdo : P - 1,
        derecho : N - 1
    }
}

let tapeEq = (arr) => {
    let N = arr.length
    let idx = 1
    let idx2 = 0
    let valor = 0
    let sum = 0
    let auxArr = []
    for(idx; idx < N; idx++){
        let lim = bordes(idx,N)
        valor = 0
        sum = 0
        for(idx2=0;idx2 <=lim.izquierdo;idx2++){
          valor = valor + arr[idx2]
        }
        sum = sum + valor
        valor = 0
        for(idx2=idx;idx2 <=lim.derecho;idx2++){
          valor = valor + arr[idx2]
        }
        sum = sum - valor
        auxArr.push(Math.abs(sum))
    }  
    return auxArr
}


function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let solArr = tapeEq(A)    
    return Math.min(...solArr)
}

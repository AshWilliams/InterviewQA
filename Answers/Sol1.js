let countZeros = (arr) => {
    let binArr = arr.toString(2).split("")
    let results = []
    let idx,count = 0
    let len = binArr.length

    for(idx = 0; idx < len; idx++){
        if(binArr[idx] == 0){
            count++
        }
        else{
            results.push(count)
            count = 0
        }
    }

    return results
}

function solution(N) {
    // write your code in JavaScript (Node.js 8.9.4)
    let results = countZeros(N)
    return Math.max.apply(null, results);
}
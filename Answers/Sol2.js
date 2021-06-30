let rotate = (arr) => {
    let len = arr.length
    let last = arr[len-1]
    //pop las element
    arr.pop()
    //insert last at array 1st position
    arr.splice(0,0,last)

    return arr
}


function solution(A, K) {
    // write your code in JavaScript (Node.js 8.9.4)
    let len = A.length
    //check emnpty array
    if(len == 0){
        return A
    }
    let idx = 0
    for(; idx < K; idx++){
        A = rotate(A)
    } 
    return A
}

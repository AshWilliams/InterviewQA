let geUnique = (arr) => {
    let last = arr.pop()
    let elem = 0
    while(arr.length > 0){
        let check = arr.indexOf(last)
        if(check == -1){
            elem = last
            break
        }
        else{
          last = arr.pop()
        }
    }
    return elem
}


function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    if(A.length == 1){
        return A[0]
    }

    return geUnique(A)
}

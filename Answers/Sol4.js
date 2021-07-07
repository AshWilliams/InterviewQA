let getJumps = (start,end,leap) => {
    let count = ( end - start ) / leap
    let mod =  ( end - start ) % leap
    count = Math.trunc(count)
    if(mod > 0)
        count++
    return count
}

function solution(X, Y, D) {
    // write your code in JavaScript (Node.js 8.9.4)
    return Math.round(getJumps(X,Y,D))
}
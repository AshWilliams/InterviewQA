function solution(X, A) {

    let holdValues = new Set();
    for(i=0;i<A.length;i++) {
        holdValues.add(A[i]);
        if(holdValues.size == X){
            console.log(X,A,holdValues)
            return i;
        }    
    }
    
    return -1;

}

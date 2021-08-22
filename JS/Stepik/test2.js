function sumEvens(start, end) {
    let sum = 0;
    for (let i=start; i<end; i++) {
        if(i>start){
            if(i%2 == 0){
                sum += i;
            }
        }
    }
    return sum;
}

console.log(sumEvens(20, 30));
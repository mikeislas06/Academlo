function findMiddleNumber(array) {
    const arrayLenght = array.length;

    if(arrayLenght%2 == 0){
        const result = arrayLenght / 2;
        let middle = [array[result-1],array[result]];
        return middle;
    }
    else{
        const result = arrayLenght / 2;
        const index = Math.floor(result);
        let middle = array[index];
        return middle;
    }
}

console.log(findMiddleNumber([4, 5, 7, 2, 3]));
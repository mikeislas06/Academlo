function arraySumValues(array) {
    let sum = 0;
    array.forEach(element =>{
       sum += element;
    });
    return sum;
}

console.log(arraySumValues([4, 5, 9, 10]));
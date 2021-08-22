function populateArray(number, limit) {
    let array = [];
    const base = number;

    while (number<limit) {
        array.push(number);
        number += base;
    }
    array.shift();
    return array;
}

console.log(populateArray(20, 100));
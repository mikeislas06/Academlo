//Crea un arreglo con los números del 1 al 400

const array = [];

for(let i = 1; i<=400; i++){
    array.push(i);
}

console.log(array);

/************************************************************************/

// Crea una función que reciba como parámetros 2 números, 
// y retorne un arreglo con todos los valores en el rango de esos 
// 2 números (incluyéndolos), por ejemplo, si recibe 1 y 4 la función 
// debe de retornar el arreglo [1, 2, 3, 4], asumiremos que el segundo 
// parámetro recibido es mayor al primero.

const numbers = [];

function numbersBetween(a, b) {
    for(let i = a; i<=b; i++){
        numbers.push(i);
    }
    return numbers;
}

console.log(numbersBetween(10,40));

/************************************************************************/

// Crea una función que lea un array de N 
//cantidad de números y retorne la suma de todos esos número.

function sumArray(array) {
    let sum = 0;
    for(let i = 0; i<array.length; i++){
        sum += array[i];
    }
    return sum;
}

const numbersArray = [10, 20, 30, 40];
console.log(sumArray(numbersArray));

/************************************************************************/

// Crea una función que reciba como parámetro un array de N cantidad 
// de elementos y retorne el elemento que se encuentra en la mitad

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

const nums = [7, 5, 8, 1, 9, 2];

console.log(findMiddleNumber(nums));
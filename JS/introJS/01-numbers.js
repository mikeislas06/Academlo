const age = "23";
const age2 = "23.43";

//El método Number convierte un string a número
console.log(Number(age2));
//El método parseInt convierte un string a un número ENTERO
console.log(parseInt(age2));

const frase = "Hola tengo 26 años";

let array = frase.split(" ");
let edad;

//Evalúa cada elemento del arreglo y búsca el que sea número
array.forEach(element => {
    if(Number(element).toString() != "NaN"){
        edad = element;
    }
});

console.log(edad);
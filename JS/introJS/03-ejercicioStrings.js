// tenemos la siguiente frase en una variable
let phrase = "Hola me llamo Erik";
// tenemos la siguiente palabra en una variable
let word = "Erik";

if(phrase.match(word))
    console.log(true);
else
    console.log(false);

//Convertir la frase en un arreglo tomando cada palabra
let array = phrase.split(" ");
//Obtener el último elemento de la frase
let last = array[array.length - 1];
//Cambiar la última palabra de la frase por "gato"
array[array.length - 1] = "gato";
//Unir las palabras del arreglo separados por un espacio
phrase = array.join(" ");
//Imprimir la longitud de la última palabra del arreglo
console.log(last.length);
//Imprimir la frase modificada
console.log(phrase);

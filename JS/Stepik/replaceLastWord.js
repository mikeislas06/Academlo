function replaceLastWord(phrase, word) {
    let array = phrase.split(" ");
//Obtener el último elemento de la frase
    let last = array[array.length - 1];
//Cambiar la última palabra de la frase por "gato"
    array[array.length - 1] = word;
//Unir las palabras del arreglo separados por un espacio
    phrase = array.join(" ");
//Retornar la longitud de la última palabra del arreglo
    return phrase;
}

console.log(replaceLastWord('Hola tengo 10 años', 'gatos'));
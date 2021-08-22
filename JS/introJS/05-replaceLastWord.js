const frase = "Hola, me llamo Miguel y mi papá también se llama Miguel";
const word =  "gato";

const lastSpaceIndex = frase.lastIndexOf(' ');
const firstPart = frase.slice(0, lastSpaceIndex);
const newFrase = firstPart + ' ' + word;

console.log(newFrase);
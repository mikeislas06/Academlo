const frase = "Hola, me llamo Miguel";

const lastWordLength = frase.length - frase.lastIndexOf(" ") - 1;
const lastWord = frase.slice(frase.lastIndexOf(' ') + 1);

console.log(lastWord);
console.log(lastWordLength);
const phrase = 'Yo soy Inevitable';
const word = 'Ironman';

//Last Word Length funcion

function lastWordLength(phrase){
    const lastWordLength = phrase.length - phrase.lastIndexOf(" ") - 1;
    const lastWord = phrase.slice(phrase.lastIndexOf(' ') + 1);
    console.log('La última palabra es: ' + lastWord);
    console.log('El largo de la palabra es: ' + lastWordLength);
};

lastWordLength(phrase);


//Replace last word of a phrase

function replaceLastWord(phrase, word){
    const lastSpaceIndex = phrase.lastIndexOf(' ');
    const firstPart = phrase.slice(0, lastSpaceIndex);
    const newFrase = firstPart + ' ' + word;

    console.log(newFrase);
};

replaceLastWord(phrase, word);
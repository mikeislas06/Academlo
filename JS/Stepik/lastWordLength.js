function countLastWordLength(phrase) {
    const lastSpaceIndex = phrase.lastIndexOf(' ');
    const lastWord = phrase.slice(lastSpaceIndex + 1);
    return lastWord.length;
}

console.log(countLastWordLength('Hola me llamo Miguel y me gusta programar'));
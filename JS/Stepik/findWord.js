function findWord(phrase, word) {
    const result = phrase.includes(word);
    return result;
}

console.log(findWord('Hola me llamo Miguel', 'Miguel'));
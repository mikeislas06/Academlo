const phrase = 'Hola me llamo Erik';
const word = 'Erik';

function encontrarPalabra(phrase, word) {
  const result = phrase.includes(word);
  console.log(result);
};

encontrarPalabra(phrase, word);
const frase = "Hola, me llamo Miguel Angel";

//Reemplaza la cadena en el primer parámetro por la cadena en el segundo parámetro
const fraseReplace = frase.replace("Miguel Angel", "José Miguel");

//Parte la cadena desde el elemento a hasta el b
const fraseSlice = frase.slice(5, 12);

console.log('Replace: '+ fraseReplace);
console.log('Slice: '+ fraseSlice);
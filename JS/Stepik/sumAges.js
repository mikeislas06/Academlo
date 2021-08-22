function sumAges(firstUserPhrase, secondUserPhrase, thirdUserPhrase) {
    const arrayPhrase1 = firstUserPhrase.split(' ');
    let age1 = 0;
    arrayPhrase1.forEach(element => {
        if (Number(element).toString() != 'NaN'){
            age1 = element;
        }
    });
    const arrayPhrase2 = secondUserPhrase.split(' ');
    let age2 = 0;
    arrayPhrase2.forEach(element => {
        if (Number(element).toString() != 'NaN'){
            age2 = element;
        }
    });
    const arrayPhrase3 = thirdUserPhrase.split(' ');
    let age3 = 0;
    arrayPhrase3.forEach(element => {
        if (Number(element).toString() != 'NaN'){
            age3 = element;
        }
    });
    return Number(age1) + Number(age2) + Number(age3);
}

console.log(sumAges('Soy Miguel y tengo 21 años', 'Soy Erik y tengo 23 años', 'Soy Oscar y tengo 26 años'));
//Operador AND &&
//Se  pueden vacunar personar mayores de 30 y menores de 40
// const age = 35;
// const result = age > 30 && age < 40;
// console.log(result);

//////////////////////////////////////////////////////////////////////////////

//Operador OR ||
//Asumimos que todas las personas mayores de 30 años están vacunadas
//Asumimos que todas las personas que viven en la frontera están vacunadas
// function persona(age, frontera) {
//     const persona = {
//         'edad': age,
//         'frontera': frontera
//     };
//     return persona
// }

// function vacunacion(edad, frontera) {
//     const result = edad > 30 || frontera == true;
//     console.log('La persona puede vacunarse? ' + result);
// }

// // const age = 20;
// // const frontera = true;s
// const p1 = persona(20, true);
// // const age2 = 20;
// // const frontera2 = false;
// const p2 = persona(20, false);
// // const age3 = 35;
// // const frontera3 = true;
// const p3 = persona(35, false);

// vacunacion(p1.edad, p1.frontera);
// vacunacion(p2.edad, p2.frontera);
// vacunacion(p3.edad, p3.frontera);

//////////////////////////////////////////////////////////////////////////////


//Operador NOT !
const gender = 'female';
const man = gender === 'male';

console.log(!man);

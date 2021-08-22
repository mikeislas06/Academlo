// function myDisplayer(some) {
//     console.log(some);
//   }

//   function myCalculator(num1, num2) {
//     let sum = num1 + num2;
//     return sum;
//   }

//   let result = myCalculator(5, 5);
//   myDisplayer(result);

// function myDisplayer(some) {
//     console.log(some);
//   }

//   function myCalculator(num1, num2) {
//     let sum = num1 + num2;
//     myDisplayer(sum);
//   }

//   myCalculator(5, 5);

//***********Callback function**************//
// function myDisplayer(result, otherNum) {
//   let sum = result + otherNum;
//   console.log(sum);
// }

// function myCalculator(num1, num2, myCallback) {
//   let sum = num1 + num2;
//   myCallback(sum, 10);
// }

// myCalculator(15, 5, myDisplayer);

const personas = [
  {
    nombre: "Miguel",
    edad: 27,
    pais: "México",
  },
  {
    nombre: "Valeria",
    edad: 25,
    pais: "Colombia",
  },
  {
    nombre: "Carlos",
    edad: 15,
    pais: "México",
  },
  {
    nombre: "Jorge",
    edad: 18,
    pais: "Ecuador",
  },
];

//*************FOREACH*****************
const fruits = ["apple", "orange", "cherry"];

// fruits.forEach((currentVal, i, array) => {
//     // console.log(currentVal);
//     // console.log(index);
//     // console.log(array);
//     console.log(`El índice es ${ i }`);
// });

//****************FILTER******************
// const ages = [32,33,16,40];
// const filteredAges = ages.filter((age) => {
//     return age >= 18
// });

// console.log(filteredAges);

// const mexicanos = personas.filter((persona) => {
//     return persona.pais === 'México';
// });

// console.log(mexicanos);

//***************FIND*****************
// const ages = [3, 10, 18, 20];

// const mayores = ages.find((age) => {
//     return age >= 18;
// });

// console.log(mayores);

// const primerColombianoMayorDeEdad = (persona) => {
//     return persona.edad >= 18 && persona.pais === 'Colombia';
// };

// console.log(personas.find(primerColombianoMayorDeEdad));

//**************SOME*********************
// const ages = [3, 10, 18, 20];

// function checkAdult(age) {
//     return age >= 18;
// }

// console.log(ages.some(checkAdult));  // Returns true

// const verificarPersonasUruguay = (persona) => {
//   return persona.pais === "Uruguay";
// };

// console.log(personas.some(verificarPersonasUruguay));

//*****************MAP*********************
const numbers = [100, 25, 10, 50, 60];

const numbers2 = numbers.map((num) => {
  return num / 10;
});

console.log(numbers);
console.log(numbers2);

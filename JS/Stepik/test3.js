function findRepeatedAge(students) {
  let mostFreq = 1;
  let found = 0;
  let item;
  for (let i = 0; i < students.length; i++) {
    for (let j = 0; j < students.length; j++) {
      if(students[i].age == students[j].age) 
        found++;
      if(mostFreq<found){
        mostFreq=found;
        item = students[i].age;
      }
    }
    found = 0;
  }
  return item;
}

const students = [
  { name: "Georg", age: 23 },
  { name: "Daniela", age: 25 },
  { name: "José", age: 27 },
  { name: "Miguel", age: 23 },
  { name: "Oscar", age: 27 },
];

console.log(findRepeatedAge(students));

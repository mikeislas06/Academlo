function countStudents(students, countries, countryName) {
    let match = [];
    let count = 0;
    for (let i = 0; i < students.length; i++) {
        for (let j = 0; j < countries.length; j++) {
            if(students[i].country_id == countries[j].id){
                match.push(countries[j].name);
            }
        }
    }
    for (let i = 0; i < match.length; i++) {
        if(match[i] == countryName){
            count++;
        }
    }
    return count;
}

const students = [
  { name: "Georg", email: "georg@academlo.com", country_id: 1 },
  { name: "Andrea", email: "andrea@gmail.com", country_id: 2 },
  { name: "Daniela", email: "daniela@gmail.com", country_id: 3 },
  { name: "Miguel", email: "miguel@gmail.com", country_id: 2 },
  { name: "Oscar", email: "oscar@gmail.com", country_id: 3 }
];
const countries = [
  { id: 1, name: "Mexico" },
  { id: 2, name: "Colombia" },
  { id: 3, name: "Peru" }
];
const countryName = "Peru";

console.log(countStudents(students, countries, countryName));
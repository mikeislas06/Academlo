function getEmails(users) {
    let arregloEmails = [];
    let cont = 0;
    users.forEach(e =>{
        arregloEmails[cont] = e.email;
        cont++;
    });
    return arregloEmails;
}

const users = [
    {
        name: 'Erik',
        email: 'erik@academlo.com',
        gender: 'Male'
    },
    {
        name: 'Georg',
        email: 'georg@academlo.com',
        gender: 'Male'
    }
];

console.log(getEmails(users));
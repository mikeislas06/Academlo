function findUser(users, key, value) {
    let foundUser = [];
    for(let i = 0; i<users.length; i++){
        if(users[i].hasOwnProperty(key)){
            if(users[i][key] == value){
                foundUser[i] = users[i];
            }
        }
    }
    let filteredUser = foundUser.filter(function (element) {
        return element != null;
    });

    return filteredUser[0];
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
    },
    {
        name: 'Andrea',
        email: 'andrea@academlo.com',
        gender: 'Female'
    },
    {
        name: 'Maria',
        email: 'maria@academlo.com',
        gender: 'Female'
    }
];

const key = 'gender';
const value = 'Female';

console.log(findUser(users, key, value));
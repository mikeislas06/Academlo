function deleteUser(users, email) {
    let index = 0;
    let target = 0;
    users.forEach(element => {
        if(element.email == email){
            target = index;
        }
        index++;
    });

    users.splice(target, 1);
    return users;
}

const users = [
    {
        name: 'Erik',
        email: 'erik@academlo.com'
    },
    {
        name: 'Georg',
        email: 'georg@academlo.com'
    },
    {
        name: 'Andrea',
        email: 'andrea@academlo.com'
    }
];

const email = 'erik@academlo.com';

console.log(deleteUser(users, email));
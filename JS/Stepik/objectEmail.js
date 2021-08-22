function getEmail(user) {
    return user.email;
}

const user = {
    name: 'Erik',
    email: 'erik@academlo.com'
};

console.log(getEmail(user));
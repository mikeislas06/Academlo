function paginateUsers(users, page) {
    let totalPages = Math.round(users.length/2);
    let newUsersPair = [];
    for (let i = 0; i < users.length; i+=2) {
        const user1 = users[i];
        console.log(user1);
        const user2 = users[i+1];
        console.log(user2);
        const UsersPaired = [user1, user2];
        newUsersPair.push(UsersPaired)

    }
    return newUsersPair[page-1];
}

const users = [
  { name: "Daniela", email: "daniela@academlo.com" },
  { name: "Juan", email: "juan@academlo.com" },

  { name: "Luis", email: "luis@academlo.com" },
  { name: "Pedro", email: "pedro@academlo.com" },

  { name: "Miguel", email: "miguel@academlo.com" },
  { name: "Valeria", email: "valeria@academlo.com" },
];

const page = 3;

console.log(paginateUsers(users, page));
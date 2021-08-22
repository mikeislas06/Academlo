function getStudentsApplications(users) {
    let aplicationUsers = [];
    for (let i = 0; i < users.length; i++) {
        if(users[i].application != null){
            aplicationUsers.push(users[i]);
        }
    }
    return aplicationUsers;
}

users = [
  {
    name: "Erik",
    email: "erik@academlo.com",
    channel: "youtube",
    application: null,
  },
  {
    name: "Georg",
    email: "georg@gmail.com",
    channel: "facebook",
    application: { country: "Mexico", state: "Nuevo León" },
  },
  {
    name: "Daniela",
    email: "daniela@gmail.com",
    channel: "youtube",
    application: { country: "Colombia", state: "Bogotá" },
  },
];

console.log(getStudentsApplications(users));
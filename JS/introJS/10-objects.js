const users = [
  {
    name: "Erik",
    age: 29,
    email: "erik@academlo.com",
    social: [
      { name: "facebook", url: "facebook/erik" },
      { name: "twitter", url: "twitter/erik" },
    ],
    gender: "Male",
  },
  {
    name: "Georg",
    age: 33,
    email: "georg@academlo.com",
    social: [
      { name: "facebook", url: "facebook/georg" },
      { name: "twitter", url: "twitter/georg" },
    ],
    gender: "Male",
  },
  {
    name: "Andrea",
    age: 42,
    email: "andrea@hotmail.com",
    social: [
      { name: "facebook", url: "facebook/andrea" },
      { name: "twitter", url: "twitter/andrea" },
    ],
    gender: "Female",
  },
  {
    name: "Oscar",
    age: 31,
    email: "oscar@academlo.com",
    social: [
      { name: "facebook", url: "facebook/oscar" },
      { name: "twitter", url: "twiter/oscar" },
    ],
    gender: "Male",
  },
  {
    name: "Daniela",
    age: 22,
    email: "andrea@uaq.mx",
    social: [
      { name: "facebook", url: "facebook/andrea" },
      { name: "twitter", url: "twitter/andrea" },
    ],
    gender: "Female",
  },
];

const emails = [users[0].email,
                users[1].email,
                users[2].email,
                users[3].email,
                users[4].email];

const facebookAccounts = [users[0].social[0].url,
                          users[1].social[0].url,
                          users[2].social[0].url,
                          users[3].social[0].url,
                          users[4].social[0].url];

console.log(emails);
console.log(facebookAccounts);
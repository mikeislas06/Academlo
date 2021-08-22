function orderUsersByScore(users) {
  users.sort(function (a, b) {
    return a.score - b.score;
  });

  return users;
}

const users = [
  { name: "Georg", email: "georg@academlo.com", score: 100 },
  { name: "Andrea", email: "andrea@gmail.com", score: 70 },
  { name: "Andrés", email: "andres@gmail.com", score: 34 },
];

console.log(orderUsersByScore(users));

function mergeData(users, attendance) {
  for (let i = 0; i < attendance.length; i++) {
    for (let j = 0; j < users.length; j++) {
      if (attendance[i].email == users[j].email) {
        if (attendance[i].attendance == true) {
          users[j]["attendance"] = true;
        } 
        else {
          users[j]["attendance"] = false;
        }
      }
    }
  }
  return users;
}

const users = [
  { name: "Georg", email: "georg@academlo.com" },
  { name: "Andrea", email: "andrea@gmail.com" },
];

const attendance = [
  { email: "georg@academlo.com", attendance: true },
  { email: "andrea@gmail.com", attendance: false },
];

console.log(mergeData(users, attendance));

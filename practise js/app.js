console.log("hy");

const users = [
  { name: "Alice", dob: "1998-05-14" },
  { name: "Bob", dob: "2000-09-22" },
  { name: "Charlie", dob: "1995-12-01" }
];

const currentDate = new Date().getFullYear()

for(let user of users){
    user.dob=new Date(user.dob)
    .getFullYear()
    const age = currentDate - user.dob
    console.log(age)
}



console.log(currentDate)
console.log(users[0].dob.getFullYear())
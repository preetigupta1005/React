
const users = [
  { name: "Alice", dob: "1998-05-14" },
  { name: "Bob", dob: "2000-09-22" },
  { name: "Charlie", dob: "1995-12-01" }
];
const updatedUsers = users.map(user => {
  const birthDate = new Date(user.dob);
  const currentYear = new Date().getFullYear();

  const age = currentYear - birthDate.getFullYear();

  return { ...user, age };
});
console.log(updatedUsers)
console.log("A");

setTimeout(() => console.log("B"), 0);

console.log("C");
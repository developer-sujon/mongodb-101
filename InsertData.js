//Insert single Document
db.employee.insert({
  name: "Mohammad Sujon",
  designation: "web developer",
  sellary: 20000,
});

//Insety Multiple Document

db.employee.insertMany([
  {
    name: "Hamim",
    designation: "Marketing",
    sellary: 80000,
  },
  {
    name: "Poros",
    designation: "Email Sender",
    sellary: 10000,
  },
]);

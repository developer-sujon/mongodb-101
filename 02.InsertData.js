//Insert Document
db.getCollection("employee").insert({
  name: "Mohammad Sujon",
  designation: "web developer",
  salary: 20000,
});

/*
executed result
for single document => WriteResult({ "nInserted" : 1 })
for multiple document => {
 "writeErrors" : [],
 "writeConcernErrors" : [],
 "nInserted" : 3.0,
 "nUpserted" : 0.0,
 "nMatched" : 0.0,
 "nModified" : 0.0,
 "nRemoved" : 0.0,
 "upserted" : []
}*/

//Insert single Document
db.getCollection("employee").insertOne({
  name: "Mohammad Sujon",
  designation: "web developer",
  salary: 20000,
});

/*
executed result
{
    "acknowledged" : true,
    "insertedId" : ObjectId("6474d6d880389505350476aa")
}
}*/

//Inset Multiple Document
db.getCollection("employee").insertMany([
  {
    name: "Hamim",
    designation: "Marketing",
    salary: 80000,
  },
  {
    name: "Poros",
    designation: "Email Sender",
    salary: 10000,
  },
]);

/*
executed result
{
  "acknowledged" : true,
  "insertedIds" : [
      ObjectId("6474d74380389505350476ab"),
      ObjectId("6474d74380389505350476ac")
  ]
}
}*/

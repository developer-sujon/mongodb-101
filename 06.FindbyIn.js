//Find By In
db.getCollection("employee").find({ name: { $in: ["Sujon", "Rakib"] } });

/*
executed result (all match documents)
{
    "_id" : ObjectId("6474d74380389505350476ab"),
    "name" : "Sujon",
    "designation" : "Developer",
    "salary" : 3000
}
{
    "_id" : ObjectId("6474d74380389505350476ac"),
    "name" : "Rakib",
    "designation" : "Email Sender",
    "salary" : 3500
}
}*/

db.getCollection("employee").aggregate([
  { $match: { skills: { $in: ["react", "node"] } } },
]);

/*
executed result (all match documents)
{
    "_id" : ObjectId("6474d74380389505350476ab"),
    "name" : "Mohammad",
    "designation" : "Developer",
    "salary" : 3000,
    "skills" : [
        "js",
        "react",
        "node"
    ]
}
}*/

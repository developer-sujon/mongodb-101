// Find By Like
db.getCollection("employee").find({ name: /Sujon/ });

/*
executed result
{
    "_id" : ObjectId("6474d74380389505350476ab"),
    "name" : "Mohammad Sujon",
    "salary": 17000,
    "roll": 05
}
{
    "_id" : ObjectId("6474d74380389505350476a1"),
    "name" : "Sujon",
    "salary": 1000,
    "roll": 190
}
}*/

db.getCollection("employee").aggregate([{ $match: { name: /sujon/ } }]);

/*
executed result
{
    "_id" : ObjectId("6474d74380389505350476ab"),
    "name" : "Mohammad Sujon",
    "salary": 17000,
    "roll": 05
}
{
    "_id" : ObjectId("6474d74380389505350476a1"),
    "name" : "Sujon",
    "salary": 1000,
    "roll": 190
}
}*/

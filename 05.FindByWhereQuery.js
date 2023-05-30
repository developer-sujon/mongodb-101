//Find by Where Query
db.getCollection("employee").find({ salary: { $gte: 3000 } });

/*
executed result (all match documents)
{
    "_id" : ObjectId("6474d74380389505350476ab"),
    "name" : "Mohammad",
    "designation" : "Developer",
    "salary" : 3000
}
{
    "_id" : ObjectId("6474d74380389505350476ac"),
    "name" : "Sujon",
    "designation" : "Email Sender",
    "salary" : 3500
}
}*/

db.getCollection("employee").aggregation([{ salary: { $gte: 3000 } }]);

/*
executed result (all match documents)
{
    "_id" : ObjectId("6474d74380389505350476ab"),
    "name" : "Mohammad",
    "designation" : "Developer",
    "salary" : 3000
}
{
    "_id" : ObjectId("6474d74380389505350476ac"),
    "name" : "Sujon",
    "designation" : "Email Sender",
    "salary" : 3500
}
}*/

//Find Document
db.getCollection("employee").find();

/*
executed result (all documents)
{
    "_id" : ObjectId("6474d74380389505350476ab"),
    "name" : "Mohammad",
    "designation" : "Developer",
    "salary" : 80000
}
{
    "_id" : ObjectId("6474d74380389505350476ac"),
    "name" : "Sujon",
    "designation" : "Email Sender",
    "salary" : 10000
}
}*/

db.getCollection("employee").findOne();
/*
executed result (first document)
{
    "_id" : ObjectId("6474d74380389505350476ab"),
    "name" : "Mohammad",
    "designation" : "Developer",
    "salary" : 80000
}
}*/

db.getCollection("employee").aggregate([]);
/*
executed result (all documents)
{
    "_id" : ObjectId("6474d74380389505350476ab"),
    "name" : "Mohammad",
    "designation" : "Developer",
    "salary" : 80000
}
{
    "_id" : ObjectId("6474d74380389505350476ac"),
    "name" : "Sujon",
    "designation" : "Email Sender",
    "salary" : 10000
}
}*/

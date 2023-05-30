//Find And Sort All Feild
db.getCollection("employee").find({}).sort({ salary: -1 });

/*
executed result (Descending)
{
    "_id" : ObjectId("6474d74380389505350476ab"),
    "name" : "Mohammad",
}
{
    "_id" : ObjectId("6474d74380389505350476ac"),
    "name" : "Sujon",
}
}*/

db.getCollection("employee").aggregate([{ $sort: { salary: 1 } }]);

/*
executed result (Ascending)
{
    "_id" : ObjectId("6474d74380389505350476ac"),
    "name" : "Sujon",
}
{
    "_id" : ObjectId("6474d74380389505350476ab"),
    "name" : "Mohammad",
}
}*/

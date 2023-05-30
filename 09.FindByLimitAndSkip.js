//Find By Limit and Skip
db.getCollection("employee").find({}).skip(1).limit(3);

/*
executed result (skip first document)
{
    "_id" : ObjectId("6474d74380389505350476ab"),
    "name" : "Mohammad",
}
{
    "_id" : ObjectId("6474d74380389505350476ac"),
    "name" : "Sujon",
}
{
    "_id" : ObjectId("6474d74380389505350476ab"),
    "name" : "Hamim",
}
}*/

db.getCollection("employee").aggregate([{ $skip: 1 }, { $limit: 1 }]);

/*
executed result (skip first document)
{
    "_id" : ObjectId("6474d74380389505350476ab"),
    "name" : "Mohammad",
}
}*/

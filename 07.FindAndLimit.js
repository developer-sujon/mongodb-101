//Find and Limit Document
db.getCollection("employee").find({}).limit(2);

/*
executed result
{
    "_id" : ObjectId("6474d74380389505350476ab"),
    "name" : "Mohammad",
}
{
    "_id" : ObjectId("6474d74380389505350476ac"),
    "name" : "Sujon",
}
}*/

db.getCollection("employee").aggregate([{ $limit: 1 }]);

/*
executed result
{
    "_id" : ObjectId("6474d74380389505350476ab"),
    "name" : "Mohammad",
}
}*/

//Find Last and First Document
db.getCollection("employee").find({}).sort({ _id: 1 }).limit(2);
db.getCollection("employee").find({}).sort({ _id: -1 }).limit(2);

/*
executed result
{
    "_id" : ObjectId("6474d74380389505350476ab"),
    "name" : "Mohammad",
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
db.getCollection("employee").aggregate([{ $sort: { _id: 1 } }, { $limit: 2 }]);
db.getCollection("employee").aggregate([{ $sort: { _id: -1 } }, { $limit: 2 }]);

/*
executed result
{
    "_id" : ObjectId("6474d74380389505350476ab"),
    "name" : "Mohammad",
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

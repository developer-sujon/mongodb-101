//Find by Where and or Operator
db.getCollection("employee").find({
  $and: [{ salary: { $gte: 4000 } }, { roll: { $gte: 40 } }],
});

/*
executed result
{
    "_id" : ObjectId("6474d74380389505350476ab"),
    "name" : "Mohammad",
    "salary": 4000,
    "roll": 55
}
{
    "_id" : ObjectId("6474d74380389505350476a1"),
    "name" : "Sujon",
    "salary": 4120,
    "roll": 40
}
}*/

db.getCollection("employee").find({
  $or: [{ $salary: { $gt: 4000 } }, { roll: { $gte: 40 } }],
});

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

db.getCollection("employee").aggregate([
  { $match: { $and: [{ $salary: { $gt: 4000 } }, { roll: { $gte: 40 } }] } },
]);

/*
executed result
{
    "_id" : ObjectId("6474d74380389505350476ab"),
    "name" : "Mohammad",
    "salary": 4000,
    "roll": 55
}
{
    "_id" : ObjectId("6474d74380389505350476a1"),
    "name" : "Sujon",
    "salary": 4120,
    "roll": 40
}
}*/

db.getCollection("employee").aggregate([
  { $match: { $salary: { $gt: 4000 } } },
  { $match: { roll: { $gte: 40 } } },
]);

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

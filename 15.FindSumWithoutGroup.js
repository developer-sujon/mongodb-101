//Find Group By
db.getCollection("employee").aggregate([{ $group: { _id: "$city" } }]);

/*
executed result
{
    "_id" : 0.0
}
*/

//Find Group By Sum
db.getCollection("employee").aggregate([
  { $group: { _id: "$city", sum: { $sum: "$salary" } } },
]);

/*
executed result
{
    "_id" : 0.0,
    "sum" : 275000.0
}
*/

//Find Group By Min
db.getCollection("employee").aggregate([
  { $group: { _id: "$city", min: { $min: "$salary" } } },
]);

/*
executed result
{
    "_id" : 0.0,
    "min" : 30000.0
}
*/

//Find Group By Max
db.getCollection("employee").aggregate([
  { $group: { _id: "$city", max: { $max: "$salary" } } },
]);

/*
executed result
{
    "_id" : 0.0,
    "max" : 70000.0
}
*/

//Find Group By Avg
db.getCollection("employee").aggregate([
  { $group: { _id: "$city", avg: { $avg: "$salary" } } },
]);

/*
executed result
{
    "_id" : 0.0,
    "avg" : 45833.333333333336
}
*/

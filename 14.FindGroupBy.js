//Find Group By
db.getCollection("employee").aggregate([{ $group: { _id: "$city" } }]);

/*
executed result
{
    "_id" : "Rangpur"
}
{
    "_id" : "Khulna"
}
{
    "_id" : "Sylet"
}
{
    "_id" : "Dhaka"
}
*/

//Find Group By Sum
db.getCollection("employee").aggregate([
  { $group: { _id: "$city", sum: { $sum: "$salary" } } },
]);

/*
executed result
{
    "_id" : "Dhaka",
    "sum" : NumberInt(0)
}
{
    "_id" : "Sylet",
    "sum" : NumberInt(0)
}
{
    "_id" : "Rangpur",
    "sum" : NumberInt(0)
}
{
    "_id" : "Khulna",
    "sum" : NumberInt(0)
}
*/

//Find Group By Min
db.getCollection("employee").aggregate([
  { $group: { _id: "$city", min: { $min: "$salary" } } },
]);

/*
executed result
{
    "_id" : "Rangpur",
    "min" : 30000.0
}
{
    "_id" : "Sylet",
    "min" : 60000.0
}
{
    "_id" : "Dhaka",
    "min" : 35000.0
}
{
    "_id" : "Khulna",
    "min" : 40000.0
}
*/

//Find Group By Max
db.getCollection("employee").aggregate([
  { $group: { _id: "$city", max: { $max: "$salary" } } },
]);

/*
executed result
{
    "_id" : "Rangpur",
    "max" : 40000.0
}
{
    "_id" : "Khulna",
    "max" : 40000.0
}
{
    "_id" : "Dhaka",
    "max" : 70000.0
}
{
    "_id" : "Sylet",
    "max" : 60000.0
}
*/

//Find Group By Avg
db.getCollection("employee").aggregate([
  { $group: { _id: "$city", avg: { $avg: "$salary" } } },
]);

/*
executed result
{
    "_id" : "Dhaka",
    "avg" : 52500.0
}
{
    "_id" : "Sylet",
    "avg" : 60000.0
}
{
    "_id" : "Rangpur",
    "avg" : 35000.0
}
{
    "_id" : "Khulna",
    "avg" : 40000.0
}
*/

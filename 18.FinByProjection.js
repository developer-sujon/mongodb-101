//Find by Projection
db.getCollection("employee").find({}, { name: 1, _id: 0 });

/*
executed result
{
    name" : "Jamil"
}
{
    name" : "Mohamamd"
}
*/

db.getCollection("employee").aggregate([{ $project: { name: 1, _id: 0 } }]);

/*
executed result
{
    name" : "Jamil"
}
{
    name" : "Mohamamd"
}
*/

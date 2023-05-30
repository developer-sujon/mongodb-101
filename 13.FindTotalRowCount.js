//Find Total Row Count
db.getCollection("employee").find({}).count("total");

/*
executed result 2518
*/

db.getCollection("employee").aggregate([{ $count: "total" }]);

/*
executed result
{
    "total" : NumberInt(2518)
}
*/

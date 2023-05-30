//Group By Multiple
db.posts.aggregate([
  {
    $group: {
      _id: { designation: "$title", city: "$city" },
      sum: { $sum: "$sarary" },
    },
  },
]);

/*
executed result
{
    "_id" : {
        "name" : "Jamil"
    },
    "sum" : 40000.0
}
{
    "_id" : {
        "name" : "Kamal"
    },
    "sum" : 100000.0
}
{
    "_id" : {
        "name" : "Sujon"
    },
    "sum" : 35000.0
}
*/

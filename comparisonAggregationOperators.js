//Comparison Aggregation Operators

$eq
Returns true if the values are equivalent.

$gt
Returns true if the first value is greater than the second.

$gte
Returns true if the first value is greater than or equal to the second.

$lt
Returns true if the first value is less than the second.

$lte
Returns true if the first value is less than or equal to the second.

$ne
Returns true if the values are not equivalent.


db.products.aggregate([
    {
      $match: { remark: "NEW" },
    },
    {
      $addFields: { "newPrice": {$eq: ['$price',630]} },
    },
  ]);
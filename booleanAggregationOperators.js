//Boolean Aggregation Operators

$and Operator
Returns true only when all its expressions evaluate to true. • Accepts any number of argument expressions.

$or Operator
Returns true only when any its expressions evaluate to true. • Accepts any number of argument expressions.

$not Operator
Returns the Boolean value that is the opposite of its argument expression. • Accepts a single argument expression.

db.products.aggregate([{
    $addFields: {
        'newPrice':  {
            $and: [
                {$eq: [1, 4]},
                {$eq: [1, 4]}
            ]
        }
    }
}])

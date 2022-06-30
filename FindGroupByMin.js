//Find Group By Min
db.employee.aggregate([{ $group: { _id: "$city", min: { $min: "$salary" } } }]);

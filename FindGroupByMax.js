//Find Group By Max
db.employee.aggregate([{ $group: { _id: "$city", max: { $max: "$salary" } } }]);

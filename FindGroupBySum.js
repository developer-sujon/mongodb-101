//Find Group By Sum
db.employee.aggregate([{ $group: { _id: "$city", sum: { $sum: "$salary" } } }]);

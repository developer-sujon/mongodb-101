//Find Group By Avg
db.employee.aggregate([{ $group: { _id: "$city", avg: { $avg: "$salary" } } }]);

//Find Sum/Max/Min/ Without Group
db.employee.aggregate([{ $group: { _id: 0, sum: { $sub: "$salary" } } }]);

db.employee.aggregate([{ $group: { _id: 0, min: { $min: "$salary" } } }]);

db.employee.aggregate([{ $group: { _id: 0, max: { $max: "$salary" } } }]);

db.employee.aggregate([{ $group: { _id: 0, avg: { $avg: "$salary" } } }]);

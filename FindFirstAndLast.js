//Find And Sort First Feild
db.employee.aggregate([{ $sort: { _id: 1 } }, { $limit: 1 }]);
db.employee.aggregate([{ $sort: { _id: -1 } }, { $limit: 1 }]);

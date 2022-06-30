//Find by Where Query
db.employee.find({ sallery: { $gte: 3000 } });

db.employee.aggregation([{ $match: { sallery: { $gte: 3000 } } }]);

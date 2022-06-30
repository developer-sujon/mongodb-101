//Find Total Row Count
db.employee.find({}).count("total");
db.employee.aggregate([{ $count: "total" }]);

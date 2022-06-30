//Find and Limit Document
db.employee.find({}).limit(2)
db.employee.aggregate([{$limit: 2}])
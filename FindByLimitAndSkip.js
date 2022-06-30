//Find By Limit and Skip
db.employee.find({}).skip(1).limit(3)
db.employee.aggregate([{$skip: 1}, {$limit: 3}])
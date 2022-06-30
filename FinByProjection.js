//Find by Projection
db.employee.find({}, {name: 1, _id: 0})
db.employee.aggregate([{$project: {name: 1, _id: 0}}])
//Find Last and First Document
db.employee.find({}).sort({ _id: 1 }).limit(2);
db.employee.find({}).sort({ _id: -1 }).limit(2);

db.employee.aggregate([{$sort: {_id: 1}}, {$limit:  2}])
db.employee.aggregate([{$sort: {_id: -1}}, {$limit:  2}])
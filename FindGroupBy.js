//Find Group By
db.employee.aggregate([{$group: {_id: "$city"}}]);

//Find By In
db.employee.find({ name: { $in: ["Sujon", "Rakib"] } });
db.employee.aggregate([{ $match: { name: { $in: ["Sujon", "Rakib"] } } }]);

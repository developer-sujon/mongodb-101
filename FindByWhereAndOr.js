//Find by Where and or Operator
db.employee.find({
  $and: [{ salary: { $gte: 4000 } }, { roll: { $gte: 40 } }],
});

db.employee.find({ $or: [{ $salary: { $gt: 4000 } }, { roll: { $gte: 40 } }] });

db.employee.aggregate([
  { $match: { $and: [{ $salary: { $gt: 4000 } }, { roll: { $gte: 40 } }] } },
]);

db.employee.aggregate([
  { $match: { $salary: { $gt: 4000 } } },
  { $match: { roll: { $gte: 40 } } },
]);

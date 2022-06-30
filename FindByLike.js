// Find By Like
db.employee.find({name: /sujon/})
db.employee.aggregate([{$match: {name: /sujon/}}])
//Find And Sort All Feild
db.employee.find({}).sort({ sellary: -1 }); // Descending
db.employee.aggregate([{ $sort: { sellary: 1 } }]); //Asending

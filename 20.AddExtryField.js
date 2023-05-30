//Add Extry Field
db.products.aggregate([
  {
    $match: { remark: "NEW" },
  },
  {
    $addFields: { newPrice: { $toDouble: "$price" } },
  },
]);

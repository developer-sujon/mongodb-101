//Facet Operator
db.posts.aggregate([
  {
    $facet: {
      total: [{ $count: "total" }],
      data: [{ $match: { user: "dev_sujon" } }, { $limit: 3 }],
    },
  },
]);

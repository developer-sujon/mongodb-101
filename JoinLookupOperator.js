//Join By Lookup Operator
db.posts.aggregate([
  {
    $lookup: {
      from: "tags",
      localField: "tagId",
      foreignField: "tagId",
      as: "tags",
    },
  },
  {
    $project: { name: 1 },
  },
]);

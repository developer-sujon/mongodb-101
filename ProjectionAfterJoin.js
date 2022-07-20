//Projection After Join
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
    $project: { _id: 0 },
  },
]);

//Group By Multiple
db.posts.aggregate([
  {
    $group: {
      _id: { designation: "$title", city: "$city" },
      sum: { $sum: "$sarary" },
    },
  },
]);

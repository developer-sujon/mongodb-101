//Search Date
let searchRgx = { $regex: "searchKeyword", $options: "i" };
let searchArray = [{ customer: searchRgx }, { discount: searchRgx }];

db.products.aggregate([
  {
    $match: searchArray,
  },
]);

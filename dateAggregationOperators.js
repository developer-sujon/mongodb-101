// Date Aggregation Operators

$dayOfYear
Returns the day of the year for a date as a number between 1 and 366 (leap year).

$dayOfMonth
Returns the day of the month for a date as a number between 1 and 31

$dayOfWeek
Returns the day of the week for a date as a number between 1 (Sunday) and 7 (Saturday)

$year
Returns the year for a date as a number

$month
Returns the month for a date as a number between 1 (January) and 12 (December).

$week Returns the week number for a date as a number between O(t* partial week that precedes the first Sunday of the year).and 53 (leap year).

$hour Returns the hour for a date as a number between 0 and 23.


$minute Returns the minute for a date as a number between 0 and 59.

$second Returns the seconds for a date as a number between 0 and 60 (leap seconds).

$millisecond Returns the milliseconds of a date as a number between 0 and 999.

$dateToString Returns the date as a formatted string.

db.products.aggregate([
    {
      $match: { remark: "NEW" },
    },
    {
      $addFields: { "newPrice": {$dayOfYear: "$createdDate"} },
    },
  ]);
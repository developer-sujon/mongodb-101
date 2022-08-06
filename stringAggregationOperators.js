//String Aggregation Operators

$concat
Concatenates any number of strings.

$split
Splits a string into substrings based on a delimiter. Returns an array of substrings.

$toLower
Converts a string to lowercase.

$toUpper
Converts a string to uppercase

$subsrtBytes
Returns the substring of a string

$indexOffBytes
Searches a string for an occurrence of a substring and returns the UTF-8 byte index of the first
occurence

$indexOfCP
Searches a string for an occurrence of a substring and returns the UTF-8 code point index of the first occurence.

$strcasecmp
Performs case-Insensitive string comparison and returns: 0 if two strings are equivalent

$strLenBytes
Returns the number of UTF-8 encoded bytes in a string.$concat.

$strLenCP
Returns the number of UTF-8 code points in a string.

$substrCP
Returns the substring of a string. Starts with the character at the specified LITF-8 code point (CP).

db.products.aggregate([
    {
      $match: { remark: "NEW" },
    },
    {
      $addFields: { "newPrice": {$concat: ['$category', ' ' ,'$subcategory']} },
    },
  ]);
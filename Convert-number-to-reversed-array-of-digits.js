// Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example:
// 348597 => [7,9,5,8,4,3]


function digitize(n) {
  let newArray = ("" + n).split("");
  let count = [];
  for (var i = newArray.length - 1; i >= 0; i--) {
    count[i] = parseInt(newArray.shift(), 10);
  }
  return count;
}

/////////////////////////

// function digitize(n) {
//   return String(n).split("").map(Number).reverse();
// }

console.log(digitize(35231), [1, 3, 2, 5, 3]);


// Count the number of times a same value appears in a javascript array

//------------------------------------------------------------------------//

var arr = [2, 3, 1, 3, 4, 5, 3, 1];

function getOccurrence(array, value) {
    var count = 0;
    array.forEach((v) => (v === value && count++));
    return count;
}

console.log(getOccurrence(arr, 1));  // 2
console.log(getOccurrence(arr, 3));  // 3

//--------------------------------------------------------------------------//

function str (array, value) {
  var count = 0;
  for (i = 0; i < array.length; i++) {
    if (array[i] == value) {
      count++;
    }
  }
  return count;
}

console.log(str(arr , "a"));
// Bubblesort Algorithm
// Overview
// The Bubblesort Algorithm is one of many algorithms used to sort a list of similar items (e.g. all numbers or all letters) into either ascending order or descending order. Given a list (e.g.):

// [9, 7, 5, 3, 1, 2, 4, 6, 8]
// To sort this list in ascending order using Bubblesort, you first have to compare the first two terms of the list. If the first term is larger than the second term, you perform a swap. The list then becomes:

// [7, 9, 5, 3, 1, 2, 4, 6, 8] // The "9" and "7" have been swapped because 9 is larger than 7 and thus 9 should be after 7
// You then proceed by comparing the 2nd and 3rd terms, performing a swap when necessary, and then the 3rd and 4th term, then the 4th and 5th term, etc. etc. When you reach the end of the list, it is said that you have completed 1 complete pass.

// Task
// Given an array of integers, your function bubblesortOnce/bubblesort_once/BubblesortOnce (or equivalent, depending on your language's naming conventions) should return a new array equivalent to performing exactly 1 complete pass on the original array. Your function should be pure, i.e. it should not mutate the input array.

// ===================================================================================================================================================//

function bubblesortOnce(a) {
  let len = [...a];
  for (let i = 0; i < len.length; i++)
    if (len[i] > len[i + 1]) [len[i], len[i + 1]] = [len[i + 1], len[i]];
  return len;
}
 
//==============================================================//

function bubblesortOnce(arr) {
  let newArr = arr.slice();
  for (let i = 0; i < newArr.length - 1; i++) {
    if (newArr[i] > newArr[i + 1]) {
      [newArr[i], newArr[i + 1]] = [newArr[i + 1], newArr[i]];
    }
  }
  return newArr;
}

// ===================================================================================//

// Sample Tests:

describe("bubblesortOnce", function () {
  it("should work for an example assertion", function () {
    Test.assertDeepEquals(
      bubblesortOnce([9, 7, 5, 3, 1, 2, 4, 6, 8]),
      [7, 5, 3, 1, 2, 4, 6, 8, 9]
    );
  });
});
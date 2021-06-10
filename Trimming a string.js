// Return a function that will trim a string (the first argument given) if it is longer than the maximum string length (the second argument given). The result should also end with "..."

// These dots at the end also add to the string length.

// So in the above example, trim("Creating kata is fun", 14) should return "Creating ka..."

// If the string is smaller than or equal to 3 characters then the length of the dots is not added to the string length.

// e.g. trim("He", 1) should return "H..."

// If the string is smaller or equal than the maximum string length, then simply return the string with no trimming or dots required.

// e.g. trim("Code Wars is pretty rad", 50) should return "Code Wars is pretty rad"

//=======================================================================================//

function trim(arr, size) {
  if (arr.length < 3) {
    let arr1 = arr.slice(0, 1) + "...";
    return arr1;
  } else if (arr.length <= size) {
    return arr;
  } else if (!(arr.length == size)) {
    let arr1 = arr.slice(0, size - 3) + "...";
    return arr1;
  }
}

//===========================================================//

function trim(arr, size) {
  return arr.length <= size ? arr: arr.length < 4 ? arr.slice(0, size) + "..." : arr.slice(0, size - 3) + "...";
}

//=========================================================================================//

// Sample Tests:

describe("Tests", () => {
  it("test", () => {
    Test.assertEquals(trim("Creating kata is fun", 14), "Creating ka...");
    Test.assertEquals(trim("He", 1), "H...");
    Test.assertEquals(
      trim("Code Wars is pretty rad", 50),
      "Code Wars is pretty rad"
    );
  });
});
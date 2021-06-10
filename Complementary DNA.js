// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". You have function with one side of the DNA (string, except for Haskell); you need to get the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

// ==========================================================================================//

function DNAStrand(dna) {
  //your code here
  let result = { A: "T", T: "A", C: "G", G: "C" };
  let arr = [];
  for (let i = 0; i < dna.length; i++) {
    arr[i] = result[dna[i]];
  }
  return arr.join("");
}

//======================//

function DNAStrand(dna) {
  //your code here
  var result = "";
  for (var i = 0; i < dna.length; i++) {
    if (dna[i] === "A") {
      result += "T";
    } else if (dna[i] === "T") {
      result += "A";
    } else if (dna[i] === "C") {
      result += "G";
    } else if (dna[i] === "G") {
      result += "C";
    } else {
      result += dna[i];
    }
  }
  return result;
}

//======================//

function DNAStrand(dna) {
  //your code here
  let dnaa = dna.split("");
  let arr = [];
  for (i = 0; i < dnaa.length; i++) {
    if (dnaa[i] == "A") {
      arr.push("T");
    }
    if (dnaa[i] == "T") {
      arr.push("A");
    }
    if (dnaa[i] == "C") {
      arr.push("G");
    }
    if (dnaa[i] == "G") {
      arr.push("C");
    }
  }
  return arr.join("");
}

//============================================================================================//

// Sample Tests:

describe("Tests", () => {
  it("test", () => {
    Test.assertEquals(DNAStrand("AAAA"), "TTTT", "String AAAA is");
    Test.assertEquals(DNAStrand("ATTGC"), "TAACG", "String ATTGC is");
    Test.assertEquals(DNAStrand("GTAT"), "CATA", "String GTAT is");
  });
});
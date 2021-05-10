// The goal is to create a function 'numberToPower(number, power)' that "raises" the number up to power (ie multiplies number by itself power times).

// Examples
// numberToPower(3,2)  // -> 9 ( = 3 * 3 )
// numberToPower(2,3)  // -> 8 ( = 2 * 2 * 2 )
// numberToPower(10,6) // -> 1000000
// Note: Math.pow and some other Math functions like eval() and ** are disabled.

//----------------------------------------------------------------------------------------//

function numberToPower(number, power) {
  // Code here
  let num = 1;
  for (let i = 0; i < power; i++) {
    num *= number;
  }
  return num;
}

//-----------------------------------------------------------------------------------------//

function numberToPower(number, power) {
  if (power === 0) return 1;
  return number * numberToPower(number, power - 1);
}

//-----------------------------------------------------------------------------------------//

function numberToPower(number, power) {
  // Code here
  let result = 1;
  let num = power;
  while (num > 0) {
    num--;
    result *= number;
  }
  return result;
}
console.log(numberToPower(2, 3));
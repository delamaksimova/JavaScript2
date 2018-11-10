'use strict';

const x = 9;
function f1(val) {
  val = val + 1;
  return val;
}

f1(x);

console.log(x);


const y = { x: 9 };
function f2(val) {
  val.x = val.x + 1;
  return val;
}

f2(y);

console.log(y);

// Add your explanation as a comment here

/* In the case with f1()

  - Pass by value: function is called by directly passing the value of the variable x as the argument
  - changing a variable x inside the function f1() does not affect the variable passed from outside the function

  In the case with f2()

  - Pass by the reference: function is called by passing the address of the variable as the argument
  - Changing the argument inside the function affect the variable passed from outside the function. */

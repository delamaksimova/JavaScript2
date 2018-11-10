'use strict';

function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
  const values = [];
  // first generate an array containing values from start value to end value (inclusive)
  for (let i = startIndex; i <= stopIndex; i++) {
    
    values.push(i);
    
    // second checks if an array element is divisble by 3 
    if(i % 3 === 0) { threeCallback(i); }

    // third checks if an array element is divisible by 5
    if(i % 5 === 0) { fiveCallback(i); }
  }
  
  return values
}

let sayThree = (number) => console.log(number + ' is divisible by 3')

let sayFive = (number) => console.log(number + ' is divisible by 5')

let result = threeFive(10, 15, sayThree, sayFive)

console.log(result)

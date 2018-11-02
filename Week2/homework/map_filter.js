'use strict';

const numbers = [1, 2, 3, 4];

const oddNumbers = numbers.filter((x) => x % 2 !== 0)
const newNumbers = oddNumbers.map((x) => x * 2)

/* const newNumbers = [];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 !== 0) {
    newNumbers.push(numbers[i] * 2);
  }
} */

console.log('The doubled numbers are', newNumbers);
// Add your code here

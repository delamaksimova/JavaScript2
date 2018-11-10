'use strict';

const values = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c'];

// Add your function here. Try and come up with a good name for this function
function deduplicate(arr) {
    return arr.filter(function (value, index, self) { 
      return self.indexOf(value) === index;
    });
  }
// Replace `yourFunction` with the name of the function you just created
const uniqueValues = deduplicate(values);

console.log(uniqueValues);

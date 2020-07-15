/*
REQUIREMENTS:
Define a function called merge

The function should, when given two sorted arrays containing numbers, returns a sorted array of the numbers from both lists.

For example:

code;	output
merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]);	[ 1, 2, 3, 4, 4, 5, 6 ]
merge([ 4 ], [ 2, 5, 8 ]);	[ 2, 4, 5, 8 ]
merge([ 1, 2, 6 ], []);	[ 1, 2, 6 ]
*/

function merge(aNumbers, bNumbers) {
  let sortedArray = [];
  let aLength = aNumbers.length;
  let bLength = bNumbers.length;
  let errMsg = 'WHOA: invalid value!';

  // build an array of values from both arrays
  for (let i = 0; i < aLength; i++) {
    // make sure the array field value is a number
    if (typeof aNumbers[i] === 'number') {
      sortedArray.push(aNumbers[i]);
    } else {
      return errMsg;
    }
  }
  for (let i = 0; i < bLength; i++) {
    // make sure the array field value is a number
    if (typeof bNumbers[i] === 'number') {
      sortedArray.push(bNumbers[i]);
    } else {
      return errMsg;
    }
    
  }
  // sort and return the merged array
  sortedArray.sort(function(a, b) { return a - b });
  return sortedArray;
}


console.log(merge([ 4, 6, 5 ], [ 1, 2, 3, 4 ]), "=?", [ 1, 2, 3, 4, 4, 5, 6 ]);
console.log(merge([ 4 ], [ 2, 5, 8 ]), "=?", [ 2, 4, 5, 8 ]);
console.log(merge([ 1, 2, 6 ], []), "=?", [ 1, 2, 6 ]);
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
  sortedArray = aNumbers.concat(bNumbers);
  sortedArray.sort(function(a, b) { return a - b });
  return sortedArray;
}


console.log(merge([ 4, 6, 5 ], [ 1, 2, 3, 4 ]), "=?", [ 1, 2, 3, 4, 4, 5, 6 ]);
console.log(merge([ 4 ], [ 2, 5, 8 ]), "=?", [ 2, 4, 5, 8 ]);
console.log(merge([ 1, 2, 6 ], []), "=?", [ 1, 2, 6 ]);
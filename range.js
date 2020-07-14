/*
REQUIREMENTS:
Define a function called range
- the function takes 3 integer parameters: start, end, and step.
-the function should return an array of numbers from start to end counting by step.

The function should return an empty array [] if given incorrect parameters, such as:
- start, end, or step being undefined
- start being greater than end
- step being 0, or negative

TEST INPUTS AND EXPECTED OUTPUTS:
code;	output
range(0, 10, 2);	[ 0, 2, 4, 6, 8, 10 ]
range(10, 30, 5);	[ 10, 15, 20, 25, 30 ]
range(-5, 2, 3);	[ -5, -2, 1 ]

 */

function range (start, end, step) {
  let arrayResult = [];
  
  //error checking
  //check for undefined variables passed into function
  if (typeof start === undefined || typeof end === undefined || typeof step === undefined){
    return arrayResult;
  }
  //check to make sure starts, ends and step are valid
  if (start > end || step < 1) {
    return arrayResult;
  }
  
  //build and return the array
  for (let i = start; i <= end; i = i + step) {
    arrayResult.push(i);
  }
  return arrayResult;
}


console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));
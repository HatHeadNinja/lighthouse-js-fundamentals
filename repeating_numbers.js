/*
REQUIREMENTS
A function named repeatNumbers that will return a string with each of the given values 
repeated the appropriate number of times, if there are multiple sets of values 
each set should be separated by a comma. 
If there is only one set of values then you should omit the comma.

TEST INPUTS; EXPECTED OUTPUTS
console.log(repeatNumbers([[1, 10]]));  1111111111
console.log(repeatNumbers([[1, 2], [2, 3]]));  11, 222
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]])); 10101010, 343434343434, 9292
*/

const repeatNumbers = function(data) {
  let dataLength = data.length;
  let sArray = [];
  let sOutput = '';
  let errMsg = 'WHOA! Something is wrong with your array!';

  for (let i = 0; i < dataLength; i++) {
    // check that the nested array has 2 numbers
    if (data[i].length === 2) {
      sArray = data[i];
      // build the repeating string
      for (let x = 0; x < sArray[1]; x++) {
        sOutput = sOutput + sArray[0];
      }
    } else { // Error: nested entry does not have 2 numbers
      return errMsg;
    } 
    // add space and comma if not last index
    if (i < dataLength - 1) {
      sOutput = sOutput + ", ";
    }
  }
  return sOutput;
}

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));
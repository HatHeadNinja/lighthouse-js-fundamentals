/* REQUIREMENTS
1. Refactor by writing a loop that prints out all the numbers 
Wrap the code you've written in a function called loopyLighthouse(range, multiples, words) 
that you call with 3 parameters.

- range should be an array of 2 numbers representing the start and end values for the loop.
- multiples should be an array of 2 numbers representing the multiples you want to replace 
with words.
- words should be an array of 2 strings representing the words that will replace the multiples.
For example, say we called the function with the following arguments.

loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);
The loopyLighthouse function should log to the console all the numbers from 15 to 90, 
except replacing multiples of 2 with "Batty", multiples of 5 with "Beacon", 
and multiples of 2 and 5 with "BattyBeacon".
*/

function loopyLighthouse(range, multiples, words){
  
  // declare variables
  const start = 0;
  let halt;

  // VALIDATE FUNCTION INPUTS:
  // (don't the level of error checking required but
  // since I blew up a screen last time, going all in!)
  // range and multiples are numbers and words are strings
  // range array is exactly 2 entries for start and stop
  // multiples array length equal to words array length
  //
  // range
  for (let i = 0; i < range.length; i++) {
    let num = range[i];
    if (isNaN(num)) {
      return 'ERROR: range array value not a number: ' + num;
    }
  }  //console.log('range array values OK');
  // multiples
  for (let i = 0; i < multiples.length; i++) {
    let num = multiples[i];
    if (isNaN(num)) {
      return 'ERROR: multiples array value not a number: ' + num;
    }
  } //console.log ('multiples array value OK');
  // multiples array length === words array length
  if (multiples.length !== words.length) {
    return 'ERROR: number of multiples does not match number of words!'
  } //console.log('number of multiples equals the number of words')

  // determine multiples

  // determine words

  // map multiples to words
  
  // loop through range

  return 'Success - EOF!';
}

let loopL = loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);
console.log(loopL);

// old code
/* for (let i = 100; i <= 200; i++) {
  if (i % 3 === 0 && i % 4 === 0) {
    console.log('LoopyLighthouse');
  } else if (i % 3 === 0 && i % 4 !== 0) {
    console.log('Loopy');
  } else if (i % 3 !== 0 && i % 4 === 0) {
    console.log('Lighthouse');
  } else {
    console.log(i);
  }
} */
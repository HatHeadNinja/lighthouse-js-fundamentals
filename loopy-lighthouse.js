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
  
  const errMsg = "'WHOA: invalid function parameter somewhere!";

  // VALIDATE FUNCTION INPUTS:
  // (don't know the level of error checking required but since I blew up a submission screen last time, going all in!)
  // * stop number is greater than start number
  //
  // check arrays only have 2 items and start is less than stop
  if (range.length === 2 && multiples.length === 2 && words.length === 2 && range[0] < range[1]) {
    for (let i = 0; i < range.length; i++) { //range and multiples are numbers and words are strings
      if (typeof range[i] !== "number" || typeof multiples[i] !== "number" || typeof words[1] !== 'string') {
        console.log(errMsg);
      }
    }
    //console.log('OK: function parameters are valid'); 
  } else { // error backstop
    console.log(errMsg);
  }

  // MAIN LOGIC BLOCK
  // loop through range, super hardcoded for arrays only having 2 correct values
  //console.log('range ' + range[0] + ":" + range[1] + " multiples " + multiples[0] + ":" + multiples[1]);
  for (let r = range[0]; r <= range[1]; r++) {
    let result = '';
    if (r % multiples[0] === 0) {
      result += words[0];
    }
    if (r % multiples[0] === 0 && r % multiples[1] !== 0) {
      console.log(words[0]); // =3
    } else if 
      (r % multiples[0] !== 0 && r % multiples[1] === 0) {
      console.log(words[1]); // =4
    } else if 
      (r % multiples[0] === 0 && r % multiples[1] === 0) {
      console.log(words[0] + words[1]); // equal both
    } else {
      console.log(r);
    }
    //console.log("x: " + x + " r: " + r);
   }
}

loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);


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
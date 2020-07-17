/*
REQUIREMENTS:
Receive a normal string of words separated with spaces as the input. 
Our job is to convert these strings into camel cased strings.

TEST INPUTS:
console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));

EXPECTED OUTPUTS:
thisIsAString
loopyLighthouse
supercalifragalisticexpialidocious
*/

const camelCase = function(input) {
  let sLength;
  let camelString = '';
  let errMsg = 'WHOA! This function only accepts strings!';

  if (typeof input === 'string'){
    let char = '';
    // trim spaces
    input.trim();
    sLength = input.length;
    for (let i = 0; i < sLength; i++) {
      if (input.charAt(i) === " ") {
        i = i + 1; // jumping ahead past space to the next character
        char = input.charAt(i); // get the letter after the space
        char = char.toUpperCase();
        camelString = camelString + char;
      } else {
        camelString = camelString + input.charAt(i)
      }
    }
  } else {
    camelString = errMsg;
  }
  return camelString;
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));
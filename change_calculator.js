/*
We will be given two numbers, the total of a transaction, 
and the amount of cash given to the cashier. 

Both of these numbers will be represented as whole numbers in cents. 

Therefore $10 will be represented as 1000.

Our function calculateChange should return an object which 
describes the total amount of change for the cashier to give back. 

Although pennies are not used in circulation, we will still calculate 
the amount of pennies to give back.

Valid denominations are as follows:

Twenty dollars
Ten dollars
Five dollars
Two dollars
One dollar
Quarter (25¢)
Dime (10¢)
Nickel (5¢)
Penny (1¢)

TESTS:
console.log(calculateChange(1787, 2000)); //{ twoDollar: 1, dime: 1, penny: 3 }
console.log(calculateChange(2623, 4000)); //{ tenDollar: 1, twoDollar: 1, oneDollar: 1, quarter: 3, penny: 2 }
console.log(calculateChange(501, 1000));  //{ twoDollar: 2, quarter: 3, dime: 2, penny: 4 }

*/

const calculateChange = function(total, cash) {
  let correctChangeRemaining = cash - total;
  let currencyUnits = 0;
  let correctChange = [];

  // validate inputs are numbers and not less than zero
  // and that cash is greater than price total
  if (total > 0 && cash > 0 && cash >= total) {
    console.log('SOF - correctChangeRemaining: ' + correctChangeRemaining);
    // exact cash provided, no change necessary
    if (correctChangeRemaining === 0) {
      return 'Exact change provided. No change required';
    } 
    // descending iteration through modulos of currency units, 
    // sorted by largest demoninations highest to lowest
    // $20 bills
    else if (correctChangeRemaining >= 2000 ) {
      currencyUnits = Math.floor(correctChangeRemaining / 2000);// / 2000);
      //console.log('20s currencyUnits: ' + currencyUnits);
      correctChange.push('twentyDollar: ' + currencyUnits);
      correctChangeRemaining = correctChangeRemaining - (currencyUnits * 2000);
    }
    // $10 bills
    if (correctChangeRemaining >= 1000 ) {
      //console.log('10s correctChangeRemaining: ' + correctChangeRemaining);
      correctChange.push('tenDollar: 1');
      correctChangeRemaining = correctChangeRemaining - (1000);
    } 
    // $5 bills
    if (correctChangeRemaining >= 500 ) {
      //console.log('5s correctChangeRemaining: ' + correctChangeRemaining);
      correctChange.push('fiveDollar: 1');
      correctChangeRemaining = correctChangeRemaining - (500);
    }
    // $2 toonies
    if (correctChangeRemaining >= 200 ) {
      //console.log('2s correctChangeRemaining: ' + correctChangeRemaining);
      currencyUnits = Math.floor(correctChangeRemaining  / 200);
      //console.log('2s currencyUnits: ' + currencyUnits);
      correctChange.push('twoDollar: ' + currencyUnits);
      correctChangeRemaining = correctChangeRemaining - (currencyUnits * 200);
    }
    // $1 loonies
    //console.log('1s correctChangeRemaining: ' + correctChangeRemaining);
    if (correctChangeRemaining >= 100 ) {
      //console.log('1s correctChangeRemaining: ' + correctChangeRemaining);
      currencyUnits = Math.floor(correctChangeRemaining / 100);
      correctChange.push('oneDollar: ' + currencyUnits);
      correctChangeRemaining = correctChangeRemaining - (currencyUnits * 100);
    }
    // .25 quarters
    //console.log('correctChangeRemaining: '+ correctChangeRemaining);
    if (correctChangeRemaining >= 25 ) {
      //console.log('.25s correctChangeRemaining: ' + correctChangeRemaining);
      currencyUnits = Math.floor(correctChangeRemaining / 25);
      //console.log('quarter: ' + currencyUnits);
      correctChange.push('quarter: ' + currencyUnits);
      correctChangeRemaining = correctChangeRemaining - (currencyUnits * 25);
    }
    // .10 dimes
    //console.log('dimes correctChangeRemaining: '+ correctChangeRemaining);
    if (correctChangeRemaining >= 10 ) {
      currencyUnits = Math.floor(correctChangeRemaining / 10);
      //console.log('dime: ' + currencyUnits);
      correctChange.push('dime: ' + currencyUnits);
      correctChangeRemaining = correctChangeRemaining - (currencyUnits * 10);
    }
    // .05 nickels
    //console.log('nickel correctChangeRemaining: '+ correctChangeRemaining);
    if (correctChangeRemaining >= 5 ) {
      currencyUnits = Math.floor(correctChangeRemaining / 5);
      //console.log('nickel: ' + currencyUnits);
      correctChange.push('nickel: ' + currencyUnits);
      correctChangeRemaining = correctChangeRemaining - (currencyUnits * 5);
    }
    // .01 penny
    //console.log('penny correctChangeRemaining: '+ correctChangeRemaining);
    correctChange.push('penny: ' + correctChangeRemaining);

  } else { // not a valid function input value
    return 'ERROR! Invalid value provided.'
  }
  // build return object and return it
  return correctChange;
}

console.log(calculateChange(200,5000));
//console.log(calculateChange(1787, 2000)); // { twoDollar: 1, dime: 1, penny: 3 }
//console.log(calculateChange(2623, 4000)); // { tenDollar: 1, twoDollar: 1, oneDollar: 1, quarter: 3, penny: 2 }
//console.log(calculateChange(501, 1000)); // { twoDollar: 2, quarter: 3, dime: 2, penny: 4 }
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
  
  // validate inputs are numbers and not less than zero
  
  // descending iteration through modulos of currency units, 
  // sorted by largest demoninations highest to lowest

  // build and return change object
};

console.log(calculateChange(1787, 2000));
//console.log(calculateChange(2623, 4000));
//console.log(calculateChange(501, 1000));
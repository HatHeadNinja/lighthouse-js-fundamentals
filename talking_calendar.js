/*
REQUIREMENTS
Given a date as a string (not a Date object). 
The date will always be formatted as YYYY/MM/DD. 
We will have to parse the given string and produce a human readable date.

TESTS
console.log(talkingCalendar("2017/12/02"));  // output: December 2nd, 2017
console.log(talkingCalendar("2007/11/11"));  // output: November 11th, 2007
console.log(talkingCalendar("1987/08/24"));  // output: August 24th, 1987

*/

const talkingCalendar = function(date) {
  let englishDate = '';

  // local function to map and return month
  function month(monthNum) {
    for (let i = 0; i < monthNum.length; i++) {
      switch (monthNum) {
        case 12:
          return 'December';
          //break;
        default:
          return 'Invalid month';
          //break;
      }
      
    }
  }

  // local function to map and return day

  // local function to map and return year

  // parse month and pass into local month function for English month
  // assigned to English date string

  // parse day and pass into local month function for English day
  // add to English date string

  // parse year and pass into local year function for English year
  // add to English date string

  // return English date string
};

console.log(talkingCalendar("2017/12/02"));  // output: December 2nd, 2017
console.log(talkingCalendar("2007/11/11"));  // output: November 11th, 2007
console.log(talkingCalendar("1987/08/24"));  // output: August 24th, 1987
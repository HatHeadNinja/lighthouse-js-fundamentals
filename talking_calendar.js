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
    let englishMonth = '';
    let errMsg = 'Invalid month value!';

    for (let i = 0; i < 12; i++) {
      switch (monthNum) {
        case '01':
          englishMonth = 'January';
          break;
        case '02':
          englishMonth = 'February';
          break;
        case '03':
          englishMonth = 'March';
          break;
        case '04':
          englishMonth = 'April';
          break;
        case '05':
          englishMonth = 'May';
          break;
        case '06':
          englishMonth = 'June';
          break;
        case '07':
          englishMonth = 'July';
          break;
        case '08':
          englishMonth = 'August';
          break;
        case '09':
          englishMonth = 'September';
          break;
        case '10':
          englishMonth = 'October';
          break;
        case '11':
          englishMonth = 'November';
          break;
        case '12':
          englishMonth = 'December';
          break;
        default: // invalid input parameter value
          englishMonth = errMsg;
      }
    }
    return englishMonth;
  }

  // local function to map and return day
  function day(dayNum) {
    let englishDay = '';
    let lastDigit = dayNum.length - 1; // for use parsing string indices

    // trim '0' from 0 index for first 9 days of month
    if (dayNum.substr(0,1) === '0') {
      dayNum = dayNum.substr(1,1);
    }
    
    // build the english day
    for (let i = 0; i < 4; i++) {
      if (dayNum.charAt(lastDigit) === '1' && dayNum !== '11') {
        englishDay === dayNum + 'st';
      } else if (dayNum.charAt(lastDigit) === '2') {
        englishDay = dayNum + 'nd';
      } else if (dayNum.charAt(lastDigit) === '3') {
        englishDay = dayNum + 'rd';
      } else {
        englishDay = dayNum + 'th';
      }
    }
    return englishDay;
  }

  // parse month and pass into local month function for English month
  let englishMonth = month(date.substr(5,2));

  // parse day and pass into local month function for English day
  let englishDay = day(date.substr(8,2));
  
  // construct englishDate and add to English year to end
  englishDate = englishMonth + " " + englishDay +', ' + date.substr(0,4);

  return englishDate;
}

console.log(talkingCalendar("2017/12/02"));  // output: December 2nd, 2017
console.log(talkingCalendar("2007/11/11"));  // output: November 11th, 2007
console.log(talkingCalendar("1987/08/24"));  // output: August 24th, 1987 
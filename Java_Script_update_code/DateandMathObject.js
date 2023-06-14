//url for - math function :-
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math

console.log(Math.max(1,2,3,45,6));


console.log(Math.min(1,2,3,45,6));

console.log(Math.pow(2,3));

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
//link for math.random function 
// This example returns a random integer between the specified values. 
// The value is no lower than min (or the next integer greater than min if min isn't an integer), and is less than (but not equal to) max.
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  }
//call function 
  getRandomInt(3,10);
  console.log('***********************');

  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
  }
  
  console.log('***********************');
  //call function 
  getRandomIntInclusive(3,10);

  function getRandom() {
    return Math.random();
  }
console.log ("----------------------");

  //call function -- it will generate random values 
 console.log( getRandom());
 //output --0.89
 console.log ("----------------------");

 //write function for getting random numbers between any two numbers 
 function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }
console.log (getRandomArbitrary(2,5));
//it willl always print random values 

console.log ("----------------------");
//date function 
const now = new Date();
//new constructor function would get called 
console.log (now);
//output - 2020-02-15T13:35:09.576Z

const date1 = new Date ( 'June 20 2020 08:20') ;
console.log (date1) ;
console.log ("----------------------");

//to get the day 
console.log(now.getDate());
console.log ("----------------------");
//to get the time 
console.log(now.getTime());
console.log ("----------------------");
//to get the year 
console.log(now.getFullYear());
console.log ("----------------------");
//to get the month 
console.log(now.getDay());
console.log ("----------------------");
//to print the exact date 
console.log(now.toDateString());
//output - Sun Feb 16 2020
console.log ("----------------------");
//to print the exact time 
console.log(now.toTimeString());
//output - 01:05:09 GMT+1100 (Australian Eastern Daylight Time)
console.log ("----------------------");
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
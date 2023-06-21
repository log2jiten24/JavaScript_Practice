//creating an Arrow functions 
//* Fat Arrow Function - we can define function without writing the function keyword // * 
var minus_results = function (a, b) {
    return a - b;
};
//call the function 
console.log('*******************************************');
console.log(minus_results(20, 10));
console.log('*******************************************');
//Parameterless - Arrow Function - with no parameters 
var update_03 = function () {
    console.log('No Parameters inside the Anonymous function ');
};
//call the function 
update_03();
console.log('*******************************************');
//If we have single statement - no need to define the curly braces 
var update_04 = function () { return console.log('No Parameters - Arrow function without curly braces '); };
update_04();
console.log('*******************************************');
//If the function having only one stmt - no need to mention curly braces even if we are passing any parameters which will return 
var update_05 = function (p, q) { return p * q; };
//no need to write any return keyword 
console.log(update_05(10, 20));
console.log('*******************************************');

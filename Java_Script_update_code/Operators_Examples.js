//different types of operators in java script - Assignment ,Arithmetic,Ternary,Binary,Comparison ,Logical 

//Arithmetic Operator 
let x  = 20 ;
let y =  10 ;
console.log(x+y);
console.log('**********************************');
console.log(x-y);
console.log('**********************************');
console.log(x*y);
console.log('**********************************');
console.log(x%y);//it will return 0 as it will return the remainder upon dividing the two numbers 
console.log('**********************************');
console.log(x ** y);//x to the power of y 
console.log('**********************************');

//Arithmetic Operator 
console.log(10/2);
console.log('**********************************');
//if we divide the number by zero we will get output as infinity 
console.log(10/0);
console.log('**********************************');
//if we divide String by zero we will get output as NaN - not a number 
console.log('Jiten'/ 0);
console.log('**********************************');

//suppose if we do addition with String - it will concarenate the String with the number as JS is dynamic typing language
let result = 10 + 10 + " " + "Kumar"
console.log('Output is :' + result);
console.log('**********************************');

//if we do the same things with minus Operator - String with - operator - it will give output as numeric
let result_01 = "10" - 10 
console.log(result_01);
console.log('**********************************');

//lets divide the number by boolean value - true or false - in java script boolean value - true  is treated as 1 
console.log(10/true);
console.log('**********************************');

//if we divide by false it will be treated as infinity 
console.log(10/false);
console.log('**********************************');

//Examples of Comparison Operator 
let value = "50" 
console.log(typeof value);
let value1 = 50 
console.log(typeof value1);
//it will give value as true and matched as == operator will do the type conversion and then do comparison  - in this case it will convert
//the string to the number 
if (value == value1) {
    console.log('Matched');
 } else {
    console.log('Not Matched');
 }
 console.log('**********************************');
 //suppose if we do the === operator it will not do the type conversion and it will not convert the data type 
 if (value === value1) {
    console.log('Matched');
 } else {
    console.log('Not Matched');
 }

 //Logical Operator 

 console.log(10 > 5);
 console.log('**********************************');
 console.log(10 < 5);
 console.log('**********************************');

 //let us use the AND && Operator in JS - where we are trying to compare two of the variables 
 //&& Operator checks both the condition should satisfy and if any of the condition is not true it will set as false 

 console.log( 10 > 5 && 10 > 6);
 console.log('**********************************');
 console.log(10 > 7  && 10 < 4);
 console.log('**********************************');

 //lets use the OR - || operator where any of the condition can be set as true 
 console.log( 10 > 4 || 10 <  7);
 console.log('**********************************');

 //usage of the NOT Operator which will reverse the result 
 console.log(!true);
 console.log('**********************************');

 //assignemnt operator 
 let num3 = 10 ; 
 console.log(num3+=5);
 console.log('**********************************');


let p = 10;
console.log(p++);//it will print p value as 10 only as post increment will hapen next 
console.log(p); //it will increment and print p value as 11 
console.log('**********************************');


let b = 2 ;
let c = b++ ;//it will stll print the c value as 2 as first b value will be given to c as 2 and b will not get incremented
console.log(c);
console.log(b);//now b value will increment the value to 3
console.log('**********************************');
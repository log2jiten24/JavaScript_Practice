//arithmetic Operators 
var x = 20;
var y = 10;
console.log(x + y); //30 
console.log(x - y); //10 
console.log(x / y); //2
console.log(x * y); //200
console.log(Math.pow(5, 2)); // it will return 25 
console.log('*********************************************');
//Increment Operator 
console.log(x++); //post Increment Operator //20 - Output
console.log(++x); //pre  Increment Operator //22 - Output 
console.log('*********************************************');
//Decrement Operator 
console.log(y++); //post Increment Operator //10 - Output
console.log(++y); //pre  Increment Operator //12 - Output
console.log('*********************************************');
//Assigment Operators 
x = 100;
y = 50;
//x = x + y ; - it can also be written as 
x += y; //Outut - 150
console.log(x);
console.log(x -= y); //x = x - y
console.log(x *= y); //x = x * y 
console.log(x /= y); //x = x / y
console.log(x %= y); //x= x % y - it will give remainder 
console.log('*********************************************');
//Relational - or Comparison Operator - it will always return true or false - boolean value 
x = 30;
y = 20;
console.log(x > y); //true
console.log(x < y); //false
console.log(x >= y); //true
console.log(x <= y); //false
console.log(x != y); //this is equivalent to not equal to - x is not equal to y true
console.log('*********************************************');
//ternary Operator 
console.log(x < y ? x : y); // if first condition is not satisfied then second variable will print 
console.log(x > y ? x : y); // if first condition is satisfied then first variable will get print 
console.log('*********************************************');
//logical operator - it compares two operatios as true or false 
var a = true;
var b = false;
console.log(a && b); // -- false (it will try to compare both the operands and both the condition should met or set as true)
console.log(a || b); // -- true (any either of the condition is set as true or false )
console.log(!a); //it will reverse the result - and become false 
console.log(!b); // it will reverse the result and become true 
console.log('*********************************************');

//usage of var , let and const in Java Script 
//var can be re-declared and updated 
var full_name = "Kumar Jitendra" 
var full_name = "Jitendra"
console.log(full_name);
console.log('*******************************');

//usage of let keyword - let keyword can be updated but it cannot be re-declared 
// let fname = "Kumar Jitendra" 
// let fname = "Jiten"
// console.log(fname);

//let variables can be updated with new values - no need to mention let variable declaration two times 
let first_name_01 = "Kumar" ;
first_name_01 = "Jiten" ;
console.log(first_name_01);
console.log('*******************************');

//use the const keword - it means once the variable is declared as const - we cannot re-declare and also update  the varaible 
const QA_tool = "Selenium" ;
//QA_tool = "Selenium 4.0" ;
console.log(QA_tool);
console.log('*******************************');

//usage of for loop with var keyword 
for(var i = 0 ; i <= 5 ; i ++ ) {
    console.log(i);
}

//access the i varable outside the loop - it will print 6 because as soon as the i variable is exited out of the loop - it has 
//changed the value to 6 
console.log('Outside the loop' , i);
console.log('*******************************');

//usage of for loop with let keyword - let scope is only at the block level - inside the for loop

for(let x = 0 ; x <= 5 ; x ++ ) {
    console.log(x);
}

//access the i varable outside the loop - it will throw error because let variable cannot be accessed outside the loop 
//console.log('Outside the loop' , x);
console.log('*******************************');

//lets do the same thing with const keyword - it will not go inside the loop - but only for one iteration as
// const value cannot be changed
// for(const y = 0 ; y < 5 ; y ++ ) {
//     console.log(y);
// }
// console.log('Outside the loop with const keyword ', y);

let a 
var b
const c = 10 //const variable has alsways to be initialised in JS 

console.log(a);//it will throw output as undefined
console.log(b);//it will throw output as undefined
console.log(c);
console.log('*******************************');

//var keyword can be updated - lets use the if - else condition 
var greetings = "Hello Java Script message" 
if (true) {
    var greetings = "Hello Java Message"
    console.log(greetings);
}
//try to access the variable outside the if condition - var keyword will always update the latest declaration 
console.log(greetings);
console.log('*******************************');

//the same thing if we do with let keyword - it will update the intial value - as let varialbe is only available inside the block
let greetings_01 = "Hello Type Script message" 
if (true) {
    let  greetings_01 = "Hello TS Message"
    console.log(greetings_01);
}
//try to access the variable outside the if condition - let  keyword will not allow to access outside the if block
//let keywod variable can be accessed from outside the block usage  
console.log(greetings_01);
console.log('*******************************');

//the same thing if we do with const keyword - it will update the value inside the block -as const keyword is available inside 
//the block
let greetings_02 = "Hello Namste Script message" 
if (true) {
    let  greetings_02 = "Hello VBScript Message"
    console.log(greetings_02);
}
//try to access the variable outside the if condition - const  keyword will always update the latest declaration 
console.log(greetings_02);
console.log('*******************************')


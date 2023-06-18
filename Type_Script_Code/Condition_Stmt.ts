//condition statemnt -if else statemnt 

var person_age : number = 18 ;

if (person_age >= 18 ) {
console.log("Eligible for vote");
} else {
console.log('Not Eligible for vote');
}
console.log('******************************');

//create a function to check whether the number is even or odd 
function checkEven_Odd (num: number) {

    if (num%2 == 0) {
        //remainder will be zero in this cas 
        console.log('Even Number');
         } else {
        console.log('Odd Number ');      
    }
}

//call the function 
checkEven_Odd(25);
console.log('******************************');

//to check the multiple if else if block with else 
var num_01 : number = 10 ;
var num_02 : number = 70 ;
var num_03 : number = 30 ;

if (num_01 > num_02 && num_01 > num_03 ) {
    console.log('a is largest number ');
}else if (num_02 > num_01 && num_02 > num_03 ) {
    console.log('b is largest number ');
} else {
    console.log('c is the largest Number');
}
console.log('******************************');

//usage of ternary operator - syntax - expression ? statement 1 : statement 2 
var u : number = 200 ;
var w : number = 300 ;

u > w ? console.log('u is greater') : console.log('w is greater ');
//if the conition is set as true - first stmmt will execute or the second stmt will execute 
console.log('******************************');

//usage of switch statement 
var numberofWeeks : number = 1 ;
switch(numberofWeeks) {
    case 1 :
        console.log('Day is Sunday'); break;
    case 2 : 
        console.log('Day is Monday'); break ;
    default:
        console.log('Default Day ');
}
console.log('******************************');
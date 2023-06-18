//to work with data types in type script 
//first let us work with type and initial value of the variable 
var employeeName = "Kumar"; //both type and initialise the variable 
console.log('Employee Name :', employeeName);
//first type or define the variable 
//then initialise the variable 
var teacherName;
teacherName = "John";
console.log('TeacherName :', teacherName);
//Create a function - and var keyword is only available inside the function and at the block level 
//we cannot access the variable name outside the function when using the var keyword 
//create a global variable using the var keyword 
var y = 70;
//create a global variable using the let keyword - there is no difference in creating global variable with var or let keyword 
var z = 100;
function somefunc() {
    if (true) {
        var sum = 10;
        console.log('Sum print is :', sum);
    }
    //sum variable can be accessed also outside the block level 
    console.log('Sum value print outside block level :', sum);
    //access the global variable inside the function 
    console.log('Access global variable inside function  ,' + y);
}
//console.log(sum);
//call the function 
somefunc();
//access the global variable anywhere 
console.log('Access global variable anywhere  ,' + y);
//var variables can be redeclared and redefined 
var x = 100;
console.log('Print initial value :', x);
//redeclare the var variables 
var y = "200";
console.log('Print the value after re declare ', y);
//let variable can be accessed only at the block level and not inside the function level 
function somefunction_let() {
    if (true) {
        //assign a let variable 
        var result = 10;
        console.log('Result variable :', result);
    }
    //let variable cannot be accessed outside the block level 
    //console.log(result);
    //accessing the global variable using the let keyword 
    console.log(z);
}
//const and let keyword variables cannot be reassigned or updated 
// let y = 70 ;
// let y = 90 ;
// const y = 70 ;
// const y = 90 ;
//const variable has to be always initialised and it cannot be always changed 
var namefull = "Kumar Jitendra";
console.log('const full name : ', namefull);

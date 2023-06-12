//function is set of statements - which  performs certain tasks 
//in Java Script - every function is also an object 

function sayHello () {

    console.log('Hello Java Script');
}

//call the function 
sayHello() ;
//function as object
console.log(typeof sayHello);
console.log('**********************************');
console.log(sayHello()); // it will throw undefined - as function is not returning anything ,if we write the function
// under the console // statement

console.log('**********************************');

//create the function which will return something 

function NameFull (fname , lname) {

    return fname + " " + lname ;
}
//call the function 
console.log(NameFull('Kumar' , 'Jitendra'));
console.log('**********************************');


//let us assign one variable value to the function 
let my_func = function func1 () {
    console.log('Hello function called from the variable');
}
//call the variable which is holding the  function directly 
my_func ();
console.log('**********************************');

//do the same thing and return a variable from the function 
let my_function = function func2 (){
    console.log('Function called');
    return 30 ;
}
//assign one variable to get the value from the function 
let result = my_function ();
console.log('Result value is :' + result);
console.log('**********************************');

//example of anonymous function - function without any name and assign the function object to the variable 
let result_01 = function (num1 , num2 , num3){

    console.log('Function called');
    return num1 + num2 + num3 ;

}
//call the anonymous function 
console.log(result_01 (10,20,30));
console.log('**********************************');

//let us add a function inside the object 

let obj_01 = {

    "name" : "Kumar Jitendra" ,
    //create a function inside the object 
    f3:function(a , b){
       
    console.log('Calling function inside the object');    
    return c = a + b;

    }
}

//let us try to access the function inside the object 
let result_02 = obj_01.f3(10,20);
console.log('Result variable :' + result_02);
console.log('**********************************');


//let us create a function inside the array 
let array_01 = [10 , "Kumar" , 30 , f1 = function(){
    console.log('Inside the Array');
}]

//retrive the function from the array using the simple indexing from the array 
array_01[3]();
console.log('**********************************');

//create a function using the arrow keyword =>
let z = (x1 , x2) => {
    console.log('Call the Arrow function ');
    return z3 = x1 + x2 ;
}

let a1 = z(10 , 70) ;

console.log(a1);
console.log('**********************************');

//when we have single statement we dont need to write the function using the {} bracket 
let my_variable = () => console.log("Sydney");
console.log(my_variable);

//pass the parameters inside the function 
let my_address_new = (houseNum , Street) => console.log(`${houseNum}  ${Street}  Sydney`);
my_address_new("87 2B Ashton" , "Rockdale Plaza");
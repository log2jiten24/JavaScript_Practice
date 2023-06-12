//data types
let name = 'JituAadya';
let age = '30';
console.log(name + " "+ age);

let colour = 'green';
console.log(colour);

let range = 4;
range = 5;
console.log (range);

//to create constants
const rangefinal = 4;
//range = 5;
console.log (rangefinal);

let s2 = 'Jiten';
let num = 30 ;
let flag = true ;

//Java script dynamic typing --assign same variable to another dat type 
let s5 = 'Jiten'
 s5 = 10;
console.log (s5);//it will print s5 value as 10 

//creating objects in java script 

let user = {

    name : "Aadya",
    age  :30
}
//printing the value of the object 
console.log(user);

//print specific details like name and age 
console.log(user.name);
console.log(user.age);

//change the object properties 
user.name = "Priya";
user.age = 25;
console.log(user.name);
console.log(user.age + " " + user.name);

//change the object properties using [] annotation 
user['name'] = 'Vivek';
console.log (user.name);

//Arrays - similar type of data storage 

let language = ['java', 'javascript','python']
console.log(language);
//array length 
console.log(language.length);

//it will add new items inside array 
language[3] = 'C++' ;
console.log(language);

console.log(language[0]);

//write a function with zero params
function getName () {

console.log('Hello world');

}
//call the function 
getName();

//write a function with one  params
function greet (name, age) {

    console.log('name is'  +  " " + name + " " + age);
    
    }
    //call the function 
    greet('Khushi', 24 );

 //return a function 
 function add( num1,  num2 ) {

    return num1 + num2 ;

 }   
let sum = add(10,80);
console.log(sum);

console.log(add(70,80));

function squareroot ( number) {

    let root = number * number ;
    return root ;
}

console.log(squareroot(5));

console.log(squareroot(10));


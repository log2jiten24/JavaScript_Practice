//types of datatypes in type script - number , string , null, void , boolean - these all are primitive data types in TS 

var firstnum : number = 12.9 ; //decimal 
//var secondnum : number = 0*37CF ; //hexa dec 
var thirdnum : number = 0o377 ; //octa dec
var fourthnum : number = 0b11101 ; //binary number 

console.log(firstnum);
//console.log(secondnum);
console.log(thirdnum);
console.log(fourthnum);
console.log('***************************************');

//string data types 
let address:string ;
let streetNum:string ;
address  = "Rocdale Plaza " ;
streetNum = "Ashton Street" ;
console.log('Print the address data types :', address + "staying in - " + streetNum );
console.log('***************************************');

//boolean data types - it can accept only two values - true or false 
var b:boolean = true;
console.log('Boolean data type :', b);
console.log('***************************************');

//void data types - function which didnt return anything 
function printhello (): void {
    console.log('Print no return void data type ');
    
}
printhello();
console.log('***************************************');

//null data type - which is undefined 
//var num1:number = null ;
var num1 = 100 ;
console.log(num1);
console.log('***************************************');

//undefined data type - it denotes all uninitialised value 
//var num2:number = undefined ;
var num2 = 700 ;
console.log(num2);
console.log('***************************************');

//in type script we have any data type which can accept any types of data type - whether string , number , boolean 

var num3:any = 200 ;
console.log(num3);
console.log('***************************************');

num3 = "Hello anytime" ;
console.log(num3);
console.log('***************************************');

num3 = true ;
console.log(num3);
console.log('***************************************');

//lets create a function with any data type - which can take any types of data types 
function myfunction (x:any , y:any) {
    //it can take any type of data types 
    console.log(x + y);
    
}

//call the function with passing number 
myfunction(10 , 20) ;
console.log('***************************************');
//call the function with passing string data types
myfunction('Kumar' , 'Jitendra') ;


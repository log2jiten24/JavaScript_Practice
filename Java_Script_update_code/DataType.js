 
//to deal with the String Primitive Data type 
let fname = "Jitendra"
console.log(fname);
//to verify whether the firstname is string or not 
console.log(typeof fname);
console.log('**********************************************');

//to deal with the numbers - in javascript, there is no float and double -every integer or decimal is treated as 
//primitive Number data type 
let marks = 100.4
console.log(typeof marks);
console.log('Print the marks : ' + marks);
console.log('**********************************************');
//to deal with the boolean value 
let status = true 
console.log(typeof status);
console.log('Boolean value print :' + status);
console.log('**********************************************');


//when we dont declare any value to the string - java script will throw an error named as undefined (undefined is data type in JS )
let lname
console.log(typeof lname)
console.log(lname);
console.log('**********************************************');

let address = null 
console.log(address);
//to verify the data type for the address variable - it will give value as Object 
console.log(typeof address);
console.log('**********************************************');

//Java Script is dynamically typed language - we dont have to declare which data type the value it will take 
let x = 10 
console.log(typeof x);
console.log(x);
x = "Jitendra"
console.log(typeof x);
console.log(x);
x = false 
console.log(typeof x);
console.log(x);
x = null
console.log(typeof x);
console.log(x);
x = undefined ;
console.log(typeof x);
console.log(x);
console.log('**********************************************');

//lets deal with non primitive data type 
let object_type = {"Fname" : "Jitendra",
                   "Lname" : "Kumar"}

console.log(typeof object_type);
console.log("Object print :" + object_type);
console.log("First Name  :" + object_type.Fname + " " +  "and LastName : " + object_type.Lname);
console.log('**********************************************');

//let deal with array in JS - that is also an object 
let marks_students = ['20' , '30' , 40, 'Jitendra']
console.log(typeof marks_students);
console.log(marks_students);
console.log(marks_students[1]);
console.log('**********************************************');

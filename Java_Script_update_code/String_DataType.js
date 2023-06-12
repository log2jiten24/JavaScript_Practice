//String in Java Script is primitive Data Type 
let fullName = "Kumar Jitendra"
console.log(typeof fullName);
console.log('Print firstName : ' + fullName)
console.log('**************************************');

//String can also be an objet - non primitive Data Type in JS 
let lname = new String("Aadya") ;
console.log(typeof lname);
console.log('Print lastName :' + lname);
console.log('**************************************');

//All the String Operations 
let fname = "My name is Kumar" 
//to get the length of the String
console.log(fname.length);
console.log('**************************************');

//to get any character from the String - Suppose to retrive any character use indexing 
console.log(fname[1]);
console.log('**************************************');

//to verify whether the word is present inside the Java Script String or not -it should throw boolean value - true or false 
console.log(fname.includes("name"));
console.log('**************************************');

//in javascript search is case sensitive - this will throw boolean value as false 
console.log(fname.includes("Name"));
console.log('**************************************');

//lets try to check the startsWith method - to verify that the string starts with cetain characters or not 
console.log(fname.startsWith('My'));
console.log('**************************************');

//lets try to check the endsWith method - to verify that the string ends with cetain characters or not 
console.log(fname.endsWith('Kumar'));
console.log('**************************************');

//lets try to use the split method avaiable for the string which will give as an array 
console.log(fname.split(" "));
let my_string_arr = fname.split(" ");
console.log('Get the second value from the array :' + my_string_arr[1]);
console.log('**************************************');

//to convert the String to the lowercase and the uppercase
console.log(fname.toUpperCase());
console.log(fname.toLowerCase());
console.log('**************************************');

//to remove the spaces from the String 
console.log(fname.trim());
console.log('**************************************');

//to replace a certain word inside the String 
console.log(fname.replace("Kumar" , "Jitendra"));
console.log('**************************************');

//to convert String to Number Data Type 
let newString = "My Phone price is 200 AUD" ;
mynewvalue = newString.split(" ")[4] ;
//this value we will be getting as String
console.log(typeof mynewvalue);
//lets try to convert the String to an Integer 
mynewPrice = parseInt(mynewvalue) ;
//to check whether the string is converted to number 
console.log(typeof mynewPrice);
console.log('Price value in numbers :' + mynewPrice);
if (mynewPrice == 200){
    console.log('Price value matching');
}else {
    console.log('Price Value not matching ');
}
console.log('**************************************');
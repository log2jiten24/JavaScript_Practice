var myString:string = "Welcome to TypeScript " ;

//get the first character of the String using charAt -function 
console.log(myString.charAt(0)); // it will print W - as the first character 
console.log('********************************');


//concat two or more strings 
var str1: string = "TypeScript is" ;
var str2: string = "my  favourite language" ;
var str3: string = "used for WebDriverIO" ;
//print the concatenate strings 
console.log(str1.concat(" ").concat(str2).concat(" ").concat(str3));
console.log(str1 +" " + str2 + " " + str3);
console.log('********************************');

//usage of replace method - it eiher replaces single character or the sequence of characters
var myString_prog = "TypeScript Programming" ;
console.log(myString_prog.replace('i' , 'Y'));//it will replace only at first occurence 
console.log(myString_prog.replace("Type" , "Java"));
console.log('********************************');

//usage of split function along with the delimiter 
var fruits = "Apple,Mangoes,Banana" ;
console.log(fruits.split(","));// [Apple Mangoes Banana] it will give the array with all the values 
console.log(fruits.split("," , 2)); //[Apple Mangoes] it will give only two values - as we have given the delimiter 
console.log('********************************');

fruits.split(",").forEach(ele => console.log(ele)); //to print each of the fruits from the array separatelt
console.log('********************************');

//usage of substring method to extract the certain sequence of characters 
myString_prog = "TypeScript Program" ;
console.log(myString_prog.substring(0 , 10));//it will give output as TypeScript 
console.log('********************************');

//usage of toUpperCase and toLowerCase methods 
console.log(myString_prog.toUpperCase());
console.log(myString_prog.toLowerCase());
console.log('********************************');

//usage of trim - function to trim the spaces 
myString_prog = " TypeScript Program " ;
console.log(myString_prog.trim());//trim all the left and right spaces 



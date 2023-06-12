//usage of for loops  in Java Script 

for (let index = 0; index < 10; index = index + 4) {
 //to print each number from 0 to 9 
console.log('Printing each number ' , index);
}
console.log('*************************************************');

//lets do the decrement from 10 to 0 in another way
let y = 10 
for ( ; y>= 0 ; y = y -4) {
//to print each number from 0 to 9 
console.log('Printing each number in decrement manner' , y); 
}
console.log('*************************************************');

//let try it to iterate over the array 
let array_value = [10 , 20 , 'Jiten']
//iterate using the for loop 
for (let y = 0 ; y<array_value.length ; y ++) {
    console.log('Array value is :' , array_value[y]);
}
console.log('*************************************************');

//usage of for each loop to print the array elements using the => arrow function 
// A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array
array_value.forEach(element => {
    //this is inside arrow function and we can perform any function 
    console.log('Each element present inside Array :' , element);
})
console.log('*************************************************');

//do the same thing using the for of loop
for (let myvalues of array_value) {
    console.log('Printing each element value using for of loop  :' , myvalues);
} 
console.log('*************************************************');

//if we do the same thing iteration using for in loop - with array it will return the index 
for (let myvalues_arr in array_value) {
    console.log('Printing for in loop indexes', myvalues_arr);
    console.log('Print the values using for in loop indexes', array_value[myvalues_arr]);
}
console.log('*************************************************');


//to print each character inside the string using the for of loop 
let str_name = "Java"
for (let y of str_name) {
    console.log('Each String value character' , y);
}
console.log('*************************************************');

//to print the key and values inside the object 
let obj_01 = {
    "name" : "Jitendra" ,
    "age"  : 34 ,
    status : true
}
//usage of for in loop to print the key and value inside the object
for (let y in obj_01) {

console.log('To print each object key value:', y);
console.log('To print each object values :' , obj_01[y]);
}
console.log('*************************************************');

//usage of while loop - with break and continue statement 
let sum = 5 
//give the while condition 
while(sum <=15) {

    console.log('While loop condition satisfies' , sum);
    if (sum == 8) { //when the value is 8 , it will break and come out of the loop condition 
        break ;
    }
//increment the condition
 sum ++
}
console.log('*************************************************');

//usage of continue statement - when we use continue statement it will not go inside the loop condition and it will go directly
//to the loop condition 
for (let z = 0 ; z <=5 ; z ++ ) {

    if(z == 3) {// 3 value will not be printed - it will be excluded 
        continue ;
    }
    console.log('Print the values :' + z);
}
console.log('*************************************************');

//usage of do while loop - in do - while loop whatever the condition is there it will get executed for once 
let v = 100 
do {
    console.log('Print the values inside do while loop :' + v);
     //increment the variable 
    v ++ ;
    
} while(v <=15)// give the condition 
console.log('*************************************************');

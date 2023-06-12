//loop practice 

//for loop, while loop , do - while loop , for ..in , for ..of loop ,infinite loop 

//for loop -- to iterate over certain conditions --i is the counter variable --multiple stmt then use curly braces 

for (let i = 0 ; i < 10 ; i ++) {

    console.log(i);//it will print values from 0 to 9 
    //console.log("Hello world");
    if (i % 2 === 0) //it will divide each value of i with 2 and if there is no remainder it will return zero 
    console.log ("Remainder is zero ");
}

//if only one statement is there - then no need to include curly brackets 
for (let j = 1 ; j <=10 ; j ++) console.log(j);

//while loop 
let i = 1 ;//initialisation
while (i <=10) //condition evaluation
{
console.log(i);
 i ++ ;//increment value of i 
 if (i %2 === 0) {
console.log ("Remainder is zero ");    
 }
}

//do while loop -- do while loop at least it will execute the condition  once ,while loop will never exceute loop once 
let p = 100 ;//initialisation

do {
    console.log(p);
    p ++ ;//increment 
}while (p <=110) //condition 



//for in loop - to iterate over object
//create object 
let details = 
{
    name : 'jiten' ,
    age  :  30 
};
//iterate over object 
for (let key in details ) {

    console.log (key , details[key]);
}

console.log("------------------------------");

//usage of for of loop to iterate over the values 
for (let values of Object.keys(details))
console.log (values);

console.log("------------------------------");

//another example of for in loop to iterate over the array 
let colors = ['red' , 'green' ,'blue'];

for (let keys in colors)
//it will print the value with index along with the values 
console.log(keys, colors[keys]);

//for - of loop ---similar to for each loop of java

for (let col of colors)
//it will directly print values 
console.log(col);

//break and continue 

let n = 200;

while (n <=210){

    if (n === 205)
    break ;
    console.log (n);
    
    n ++ ;
}


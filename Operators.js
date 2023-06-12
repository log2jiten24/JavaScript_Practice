//different types of operators in java script - Assignment ,Arithmetic,Ternary,Binary,Comparison ,Logical 

//Arithmetic Operator 
let x  = 20 ;
let y =  10 ;
console.log(x+y);
console.log(x-y);
console.log(x*y);
console.log(x%y);
console.log(x ** y);//x to the power of y 

let p = 10;
console.log(p++);//it will print p value as 10 only as post increment will hapen next 
console.log(p); //it will increment and print p value as 11 

let b = 2 ;
let c = b++ ;//it will stll print the c value as 2 as first b value will be given to c as 2 and b will not get incremented
console.log(c);
console.log(b);//now b value will increment the value to 3

let d = 4 ;
let e = ++d ; //it will stll print the e value as 5 for e as d got pre-increment  and new value 5 is assigned to e
console.log(e);
console.log(d);//now d value will also got pre increment and print the value to 5 

//decrement operator 
let q = 20;
console.log(q--);//it will print p value as 20 only as post decrement  will hapen next 
console.log(q); //it will decrement and print p value as 19

let r = 30 ;
let s = r-- ;//it will stll print the s value as 30 as first r value will be given to s as 30 and s will not get incremented
console.log(s);
console.log(r);//now r value will decrement the value to 29

let g = 50 ;
let h = --g ; //it will stll print the e value as 49 for h as g got pre-decrement  and new value 49 is assigned to e
console.log(g);
console.log(h);//now h value will also got pre decrement and print the value to 49



//Assignment operator 
let w = 10 ;
let u = w + 10;
console.log(w + u);

//w = w * 10 ;
w *=10 ;//multiplication cvan also be written like this 
console.log(w);

let j = 10 ;
//j = j +10 ;
//this can also be written as 
j+=10 ;
console.log(j);

//comparison operator 
let v = 10;
console.log(v>10); //it will return boolean value as false 
console.log(v<=10); //it will return boolean value as true 

//example of strict equality - it checks for the type and value both are equal
console.log(v ===10);//it will return true as it will check the equality 

//loose equality - it only checks the value
console.log('10' == 10);
console.log(10 == 10);
console.log(v == 10);
console.log(true == 10 ); //it will also return true as boolean value true is getting returned 


//ternary operator 
let points = 100 ;
let type = points > 100 ? 'gold' : 'silver' ;
console.log(type);

//logical operator 
//AND (&&) --it checks whether both the conditions are true or false 
let highincome = true ;
let goodcreditscore = true ;
let eligibleloan = highincome && goodcreditscore ;
console.log(eligibleloan);

//logical operator 
//OR(||) --it checks whether one of  the conditions are true or false 
let highincomee = false ;
let goodcreditscoree = false ;
let eligibleloann = highincomee || goodcreditscoree ;
console.log(eligibleloann);

//Logical -- NOT operator -- !=
//NOT Operator will reverse any condition --for true it will change to false 
let isActive = true ;
console.log(!isActive);
console.log(!(10 > 5));//though 10>5 - condition true but it will make condition as false 
console.log(!(5 > 10));//though 5>10 - condition false but it will make condition as true 

//logical operator with boolean value 
//different falsy values there --'0',undefined ,null,false ,not a number
//truthy values which are not false 
console.log(false || 'jiten');//it will print jiten - as it will go to truthy values
console.log(true  || '0' );//it will print true 
console.log(false || 1 || 2);//it will print 1 -it goes to second condition 
console.log(true  || 1 || '0');//it will print true
console.log(false || 'undefined' || 'zero') ;//it will print undefined


//real time example 
let usercolor = 'green';
let defaultcolor = 'blue';

let currentcolor = usercolor || defaultcolor ;
console.log(currentcolor);//it will give output as green


//real time example 
let usercolorr = '';//if its undefined ,zero ,blank --it will cause to fail the first condition 
let defaultcolorr = 'blue';

let currentcolorr = usercolorr || defaultcolorr ;
console.log(currentcolorr);//it will give output as blue as first condition will fail and it will go to second condition 

//operator precedence 
console.log(2+4*2) ;//it will give 10 --multiply will happen first 
console.log((2+4) *3 );

//swap two numbers
let i = 10 ;
let k = 20 ;

let f = i ;
    i = k ;
    k = f ;
console.log("i value is ->" + i);
console.log("k value is ->" + k);

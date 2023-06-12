//different value types in java script 
//number ,string ,boolean,symobl,undefined ,null 

//different reference types 
//Object ,Function , Array 

let x = 10;
//let y = 10;

y = x ;
x = 20 ;

console.log ("value of x is :" + x);
console.log ("value of y is :" + y);

let p = {value : 10 };
q= p ;
//reference type value is not  copied  -- here both p and q will point to value 10 
console.log (p.value);
console.log (q.value);
//objects are copied by there references and not by values 
//values are copied by there values and not references 
//reference will not get copied but value will get copied 


//TypeScript supports Functions Overloading - functions with different parameters 

//create two same functon name having two different paramter names 
function results_overload (m:number , n:number): number ;
function results_overload (m:string , n:string ):string ;

//define the same function body with any -data type 
function results_overload (m : any , n : any) : any {
    return m + " " + n
}

//call the overload function which will call the overload function 
console.log(results_overload(10 , 20 ));
console.log(results_overload("TypeScript" , "Welcome"));
console.log('*************************************************');

 
//Note - Functions overloading with different parameters and types with same name  are not supported 

//Rest Parameters - if the number of parameters inside the function is not known - and not sure how many parameters function is going to
//take - it can pass as ... - this means it can take any number of parameters 

 function greetings_msg (greetings_msg : string , ...names :string[])
 {
  return greetings_msg + " " + names.join(", ") ;//to add spaces we are using join keyword 
 }

 console.log('*************************************************');
 console.log(greetings_msg("Hello")); //passing only one parameter - second parameter is null 
 console.log(greetings_msg("Hello" , "Kumar")); // giving only one values 
 console.log(greetings_msg("Hello" , "Kumar" , "Jiten"));
 console.log('*************************************************');
 
 
 
//types of Parameters in the function 

function greet (firstName : string , lastName: string) : string 
{
return firstName + " " + lastName ;
}
//call the function 
console.log('*************************************');
console.log(greet("Welcome" , "TypeScript"));
console.log('*************************************');
//console.log(greet("Welcome")); // this will throw compile time error as it is accepting to pass two parameters 

//let us create an optional parameter - argument is not neccessary to be passed when calling the function 
function greet_optional (fname : string , lname?:string) 
{
    return fname + " " + lname ;
}
console.log('*************************************');
console.log("Kumar");//we can see its not throwing compile time error - as it is not necessary to pass the optional parameter 
console.log('*************************************');

//let us have a default parameter - where we can pass any default value to the parameter 
function greet_default (houseName: string , streetName : string = "Ashton Street" ) : string 
{
return houseName + " " + streetName ;
}

console.log('*************************************');
console.log(greet_default("Palace Street"));//passing one argument - and the default argument will take over here 
console.log(greet_default("King Street" , "Rockdale Plaza"));// passing two arguments which will override the default argument 
console.log('*************************************');





//TypeScript supports Functions Overloading - functions with different parameters 
//define the same function body with any -data type 
function results_overload(m, n) {
    return m + " " + n;
}
//call the overload function which will call the overload function 
console.log(results_overload(10, 20));
console.log(results_overload("TypeScript", "Welcome"));
console.log('*************************************************');
//Note - Functions overloading with different parameters and types with same name  are not supported 
//Rest Parameters - if the number of parameters inside the function is not known - and not sure how many parameters function is going to
//take - it can pass as ... - this means it can take any number of parameters 
function greetings_msg(greetings_msg) {
    var names = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        names[_i - 1] = arguments[_i];
    }
    return greetings_msg + " " + names.join(", ");
}
console.log('*************************************************');
console.log(greetings_msg("Hello")); //passing only one parameter - second parameter is null 
console.log(greetings_msg("Hello", "Kumar")); // giving only one values 
console.log(greetings_msg("Hello", "Kumar", "Jiten"));
console.log('*************************************************');

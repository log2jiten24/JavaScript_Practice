//we can directly access the module_01.ts variables and functions inside the module_02
//change the values - as variables and functions are global 

//to access the variable from module_01.ts file - the string variable we need to use the import keyword
import { Demo1, my_function, strdemo } from "./module_01";
console.log(strdemo);


//call the function directly from the module_01 
my_function () ;


//we can also create an object of the module_01 - inside the module_02.ts file 
let var_obj = new Demo1 (10 , 20) ;

//access the methods of the class using the object name 
console.log(var_obj.display());


//this behaviour can cause code conflicts - if we can access the variables and functions from one file to another 


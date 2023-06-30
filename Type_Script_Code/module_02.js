"use strict";
//we can directly access the module_01.ts variables and functions inside the module_02
//change the values - as variables and functions are global 
Object.defineProperty(exports, "__esModule", { value: true });
//to access the variable from module_01.ts file - the string variable we need to use the import keyword
var module_01_1 = require("./module_01");
console.log(module_01_1.strdemo);
//call the function directly from the module_01 
(0, module_01_1.my_function)();
//we can also create an object of the module_01 - inside the module_02.ts file 
var var_obj = new module_01_1.Demo1(10, 20);
//access the methods of the class using the object name 
console.log(var_obj.display());
//this behaviour can cause code conflicts - if we can access the variables and functions from one file to another 

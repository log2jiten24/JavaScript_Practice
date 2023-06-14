
//in Java Script we have multiple modules we try to use - which has many functions which can be called 

const os_module = require("os")
const asser_module = require("assert");
const { assert } = require("console");


//get the platform 
console.log(os_module.platform());
console.log(os_module.homedir());
console.log(os_module.type());
console.log(os_module.hostname());
//console.log(50>30);
assert (50 > 300, "Value Mismatch");


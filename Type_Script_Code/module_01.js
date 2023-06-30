"use strict";
//create a variable 
Object.defineProperty(exports, "__esModule", { value: true });
exports.Demo1 = exports.my_function = exports.strdemo = void 0;
exports.strdemo = " Hello TypeScript ";
//create a function 
function my_function() {
    console.log('Function is called ');
}
exports.my_function = my_function;
//create a class and define variables and methods inside the class 
var Demo1 = /** @class */ (function () {
    //create a constructor to initialise the constructor variable 
    function Demo1(a, b) {
        var _this = this;
        this.display = function () {
            return (_this.a + " " + _this.b);
        };
        this.a = a;
        this.b = b;
    }
    return Demo1;
}());
exports.Demo1 = Demo1;

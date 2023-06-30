//create an interface and implement with the help of class 
var C1 = /** @class */ (function () {
    //create a constructor to access the class - global variables 
    function C1(a, b, x, y) {
        this.a = a;
        this.b = b;
        this.x = x;
        this.y = y;
    }
    C1.prototype.sum = function () {
        //with the help of this keyword access the class variable inside the method 
        return (this.a + this.b);
    };
    C1.prototype.multi = function () {
        return (this.x * this.y);
    };
    return C1;
}());
//create an object of the class to access the methods defined inside the class
var object_01 = new C1(10, 20, 30, 60);
//once an object is created -default the constructor variables will be initialised 
//access the class methods 
console.log(object_01.sum());
console.log(object_01.multi());

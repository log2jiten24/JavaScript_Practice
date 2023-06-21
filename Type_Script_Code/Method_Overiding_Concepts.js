//concepts of Method Overriding 
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Bank = /** @class */ (function () {
    function Bank() {
        this.rateOfInterest = 0;
    }
    //create a method with return type 
    Bank.prototype.display_rate = function (rate) {
        //accessing the class - global vairable inside the method 
        return this.rateOfInterest = rate;
    };
    return Bank;
}());
var Customer = /** @class */ (function (_super) {
    __extends(Customer, _super);
    function Customer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    //create a child class method 
    Customer.prototype.display_rate = function () {
        return 10.5;
    };
    return Customer;
}(Bank));
//create another class 
var Lender = /** @class */ (function (_super) {
    __extends(Lender, _super);
    function Lender() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    //create a child class method
    Lender.prototype.display_rate = function () {
        return 11.5;
    };
    return Lender;
}(Bank));
//Hierarchial Over riding - One class can Inherit two different classes 
//lets create two objects of the child class separately to access the methods 
var obj_result = new Customer();
//print the method of the child class 
console.log(obj_result.display_rate());
//lets create an object of the child class 
var obj_result_01 = new Lender();
console.log(obj_result_01.display_rate());

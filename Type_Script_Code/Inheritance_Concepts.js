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
var Person = /** @class */ (function () {
    //create a constructor inside the class to initialize the variables 
    function Person(empName) {
        //initialize the variable 
        this.name = empName;
    }
    return Person;
}());
//create a child class which will extend the Parent class 
var Employee_Person = /** @class */ (function (_super) {
    __extends(Employee_Person, _super);
    //create a constructor of the child class 
    function Employee_Person(reg_Num, name) {
        var _this = 
        //call the parent class constructor variable 
        _super.call(this, name) || this;
        _this.reg_Num = reg_Num;
        return _this;
    }
    //create a method inside the child class 
    Employee_Person.prototype.displayData_details = function () {
        console.log(this.reg_Num);
        console.log(this.name);
    };
    return Employee_Person;
}(Person));
//create an object of the class 
var obj = new Employee_Person(25665, "Sam Curran");
//call the object of the child class 
obj.displayData_details();

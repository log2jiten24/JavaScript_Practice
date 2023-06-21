//create a class and objects inside the TypeScript
//Every function inside the class is called method 
var Employee = /** @class */ (function () {
    //create a constructor of the class and pass all the variables 
    function Employee(emplyeeID, dept_stream, regNum) {
        //assign the class - global vairable to the local variable inside the constructor 
        this.eID = emplyeeID;
        this.department_Stream = dept_stream;
        this.registrationNumber = regNum;
    }
    Employee.prototype.employee_set_details = function (emplyeeID, dept_stream, regNum) {
        //assign the class - global vairable to the local variable 
        this.eID = emplyeeID;
        this.department_Stream = dept_stream;
        this.registrationNumber = regNum;
    };
    Employee.prototype.employee_details_display = function () {
        //define the details 
        console.log("Employee ID Number :", this.eID);
        console.log("Department Stream  :", this.department_Stream);
        console.log("Registration Number:", this.registrationNumber);
    };
    return Employee;
}());
//create object of the class 
var obj1 = new Employee(23000, "David", 8745); // whenever object is created , default constructor gets 
//called for initialising the object creation - that is the difference between the constructor and method 
//  obj1.department_Stream = "Computer Science" ; // this is one way to initalize the variables and pass it - initialize using object variable 
//  obj1.eID = 1007 ;
//  obj1.registrationNumber = 2007855251 ;
//call the method to pass the variables - initialize variables using method 
// obj1.employee_set_details(5633,"Patrick" , 78456666) ;
//display the details 
obj1.employee_details_display(); //call the class method with the object 

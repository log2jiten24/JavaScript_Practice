//create a class and objects inside the TypeScript
//Every function inside the class is called method 

class Employee
{

//create the global or class variables inside the class     
eID : number ;
department_Stream : string ;
registrationNumber : number ;
   
  //create a constructor of the class and pass all the variables 
  constructor (emplyeeID: number , dept_stream : string , regNum : number) 
  {
     //assign the class - global vairable to the local variable inside the constructor 
     this.eID = emplyeeID ;
     this.department_Stream = dept_stream ;
     this.registrationNumber = regNum ;
  }
   
  employee_set_details (emplyeeID: number , dept_stream : string , regNum : number)  : void //return type void 
  {
    //assign the class - global vairable to the local variable 
    this.eID = emplyeeID ;
    this.department_Stream = dept_stream ;
    this.registrationNumber = regNum ;

  }
   

    employee_details_display (): void 
    {
        //define the details 
        console.log("Employee ID Number :", this.eID);
        console.log("Department Stream  :", this.department_Stream);
        console.log("Registration Number:",this.registrationNumber);

    }

   
}

 //create object of the class 
 var obj1 = new Employee (23000, "David" , 8745) ; // whenever object is created , default constructor gets 
 //called for initialising the object creation - that is the difference between the constructor and method 



//  obj1.department_Stream = "Computer Science" ; // this is one way to initalize the variables and pass it - initialize using object variable 
//  obj1.eID = 1007 ;
//  obj1.registrationNumber = 2007855251 ;
//call the method to pass the variables - initialize variables using method 
// obj1.employee_set_details(5633,"Patrick" , 78456666) ;

//display the details 
 obj1.employee_details_display () ;//call the class method with the object 


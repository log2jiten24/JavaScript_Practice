class Person {

    name : string ;

    //create a constructor inside the class to initialize the variables 
    constructor (empName : string ) 
    {
        //initialize the variable 
        this.name = empName ;
    }


}

//create a child class which will extend the Parent class 

class Employee_Person extends Person 
{
    reg_Num : number ;

    //create a constructor of the child class 
    constructor (reg_Num: number , name : string ) 
    {
        //call the parent class constructor variable 
        super(name);
        this.reg_Num = reg_Num ;

    }

    //create a method inside the child class 
    displayData_details(): void {
       
        console.log(this.reg_Num);
        console.log(this.name);
    }
}

//create an object of the class 

var obj = new Employee_Person(25665 , "Sam Curran");

//call the object of the child class 
obj.displayData_details();

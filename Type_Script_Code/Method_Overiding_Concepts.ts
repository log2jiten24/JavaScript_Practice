//concepts of Method Overriding 

class Bank {

    rateOfInterest : number = 0 ;

    //create a method with return type 
    display_rate (rate: number) : number 
    {
        //accessing the class - global vairable inside the method 
        return this.rateOfInterest = rate ;
    }


}

class Customer extends Bank 
{
   
    //create a child class method 
    display_rate () : number // overriding the method from the parent class 
    {
     return 10.5 ;
    }
}

//create another class 
class Lender extends Bank
{
    //create a child class method
  
    display_rate () : number // overriding the method from the parent class 
    {
     return 11.5 ;
    }
}

//Hierarchial Over riding - One class can Inherit two different classes 

//lets create two objects of the child class separately to access the methods 
var obj_result = new Customer () ;
//print the method of the child class 
console.log(obj_result.display_rate());

//lets create an object of the child class 
var obj_result_01 = new Lender() ;
console.log(obj_result_01.display_rate());

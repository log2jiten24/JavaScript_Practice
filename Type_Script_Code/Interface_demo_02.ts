//create an interface and implement with the help of class 

//create one Interface with variables and the method definition 
interface I1 
{
    //declare the variable 
    a: number ,
    b: number ,
    
    //declare the method 
    sum(): number ;
}

interface I2 extends I1 { // I2 Interface extends Interface I1 

    //declare the variable 
    x: number ;
    y: number ;

    //declare the method 
    multi () : number ;
}


class C1 implements I2 {

    //declare the vairables again from the interface 
    a : number ;
    b : number ;
    x : number ;
    y : number ;

    //create a constructor to access the class - global variables 
    constructor(a:number , b: number , x: number , y: number ) {
        this.a = a ;
        this.b = b ;
        this.x = x ;
        this.y = y ;
    }

    sum () : number  
    {
        //with the help of this keyword access the class variable inside the method 
        return (this.a + this.b) ;
    }

    multi () : number 
    {
       return (this.x  * this.y) ;
    }

}


//create an object of the class to access the methods defined inside the class
 var object_01 = new C1 (10 , 20 , 30 , 60) ;
//once an object is created -default the constructor variables will be initialised 
//access the class methods 

 console.log(object_01.sum());

 console.log(object_01.multi());
 


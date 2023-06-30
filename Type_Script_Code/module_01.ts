//create a variable 

export var strdemo: string = " Hello TypeScript " ;

//create a function 
export function my_function () : void 
{
console.log('Function is called ');
}

//create a class and define variables and methods inside the class 

export class Demo1 {

    a : number ; 
    b : number ;
    
    //create a constructor to initialise the constructor variable 
    constructor(a: number ,  b : number ) {

        this.a = a ;
        this.b = b ;
    }

    display = () => //create an anonymous function with arrow keyword 
    {

        return (this.a + " " + this.b) ;
    }

}
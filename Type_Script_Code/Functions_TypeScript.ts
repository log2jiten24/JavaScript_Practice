//create the named function 

function welcome_display ()
{
console.log('Welcome to TypeScript');
}
console.log('**********************************');
//call the function 
welcome_display();
console.log('**********************************');

//create a named function with passing parameters and having return type 

function sumofNumberss (x:number, y :number) : number //this number is return type of the function 
{
    return x + y
}
console.log('**********************************');
console.log(sumofNumberss(100,200));// this will give output as 300
console.log('**********************************');

//-----------------ANONYMOUS FUNCTION -- FUNCTION WITHOUT ANY NAME ------------------------//
let result_01 = function ()//store the function inside any variable 
{
console.log('Anonymous Function getting called ');

}

//call the function with the variable name 
result_01();
console.log('**********************************');

//Anonymous functions with arguments and return type 
let results_update = function ( w:number , y:number) : number 
 {
  return w + y ;
 }
//call the function 
console.log(results_update(10 , 20 ));//call the function -output is 30
console.log('**********************************');



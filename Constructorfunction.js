//constructor function also used to create Objects 
//it follows Pascal notation :OneTwoThree -- each beginning letter of word should be in capital letters 

function Circle(radius){
    //initialise radius variable to it 
    this.radius = radius ;

    this.draw = function () {
        console.log ('draw');
    }
}
//call constructor function : use new keyword 
const a = new Circle(10);
console.log (a);
//output - circle { radius: 10, draw: [Function] }
console.log(a.radius);
console.log(a.draw);

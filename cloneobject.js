//usage of clone - to copy and paste one object properties into another 

const Circle = {

    radius : 5 ,
    area   : 10,

    draw (){
        console.log ("circle function");
    }
};

const square = { };
//for in loop 
for (let key in Circle)
square[key] = Circle[key]; 
console.log (square);//all the values of the Circle object will get copied into square object 
//output - { radius: 5, area: 10, draw: [Function: draw] }

console.log("------------------------");

//2nd method is using Object.assign method 
//copy the square object inside the Rect Object 
const Rect = Object.assign({}, square)
console.log (Rect);

console.log("------------------------");

//assign values to the object while copying 
const Panagon = Object.assign({
    area : 100,
    radius :5 ,
}, Circle)
console.log (Panagon);
//to call draw method inside an object 
console.log (Panagon.draw);

console.log("------------------------");

//3rd method to copy object using the ...Separtor Operator 
//...Operator will copy all the properties of an object inside the another object 
const Octagon = {...Panagon};
console.log (Octagon);

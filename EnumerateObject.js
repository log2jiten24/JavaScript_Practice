//Enumerating properties of an object 
//get all properties of an object 
//in opertor = check property inside an object

const circle = {

    radius : 1 ,

    draw ()
    {
   console.log ('draw') ;
    }
};

//usage of for in loop 
for (let key in circle) 
console.log (key ,circle[key] );
//it will print key with values 
// radius 1
// draw draw ()
//     {
//    console.log ('draw') ;
//     }
console.log("------------------------");

//usage of for of loop --it will iterate over the keys 
 for (let keys of Object.keys(circle))
 console.log(keys) ;
 //it wil give all keys values -- radius and draw 
console.log("------------------------");
// radius
// draw

for (let key of Object.entries(circle))
console.log (key) ;
// [ 'radius', 1 ]--output 
// [ 'draw', [Function: draw] ]

//in opertor = check property inside an object 
if ('radius' in circle)
console.log ('Yes');

if ('price' in circle)
console.log ('Yes');
else console.log('No');

if ('draw' in circle)
console.log ('Yes');
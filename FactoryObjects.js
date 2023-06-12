//Factory Objects - it will produce number of objects
//function naming convention - it always follow camelcase type like oneTwoThreeFour 
function createCircle (radius)
{
    const circle = {
    //storing value in key value pair 
    radius : radius ,
    
    draw ()
    {
    console.log ('draw');
    }
}
    return circle ;
}
//simple format 
function createCirclee (radius)
{
    return {
      //storing value in key value pair 
     radius ,
     draw ()
    {
    console.log ('draw');
    }
   } 
}

const c1 = createCircle(5);
console.log (c1.radius);
c1.draw;

const c2 = createCircle(10);
console.log (c2.radius);
c2.draw;

const c3 = createCirclee(30);
console.log(c3.radius);
console.log(c3.draw);
//vars and functions should be defined  inside the objects 
//key :value pair format 

//CREATE AN Objct 

const circle =  {
    //variables inside the object
    radius :1 ,
    isVisible : true, 
    //create another object inside circle 
     location :  {
        //variables inside the location object 
        x :1,
        y :5 
    },
   //create function 
    draw :function()
    {
    console.log(draw);    

    }
}
//to fetch the object values 
console.log (circle.radius);
//to fetch all object values
console.log(circle);
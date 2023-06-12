const circle = {

    radius :1 ,
    color : 'red' ,

    log ()
    {
   console.log('log' ,this.radius);
    }
  } 

  console.log(circle);
  //output - { radius: 1, color: 'red', log: [Function: log] }

  console.log(circle.radius);
  console.log(circle.color);

  //dynamically add more object properties to the object 
  circle.price = 100 ;
  circle.draw = function() {
      console.log ('draw function calling ') ;
  }

  console.log(circle) ;
  console.log(circle.draw);

  //delete properties from circle object 
  delete circle.price ;
  console.log(circle);

  delete circle.draw ;
  console.log(circle) ;
  //output - { radius: 1, color: 'red', log: [Function: log] } -- price and draw function would get deleted 

  //add more propereis 
  circle.isPresent = true ;
  console.log(circle) ;

  circle.log();

  
//if else 
//switch condition 

let hour = 10;
if      (hour >=6 && hour <=12) {

    console.log("Good Morning");

}else if (hour >=12 && hour <=16) {

    console.log("Good Afternoon");
}else {

    console.log("Good Evening ");  
}
//if only one statement is there then we can remove the curly braces and write the code 
let hourly = 18;
if (hourly >=6 && hourly <=12) console.log("Good Morning");
else if (hourly >=12 && hourly <=16) 
console.log("Good Afternoon");
else console.log("Good Evening ");  

//print the greatest of the numbers 
let a = 200 ;
let b = 300 ;
let c = 500 ;

if (a > b && a > c){
    console.log ("a is greatest");
} else if (b >c ){
    console.log(" b is greatest ");
}else {
    console.log ("c is greatest");
}

//switch case 

let role = 'jiten' ;

switch (role) {

    case 'guest' :
    console.log ("role is guest ");
    break ;

    case 'vendor' :
    console.log("role is vendor ");
    break ;

    case 'admin' :
    console.log("role is admin ");
    break ;

    default :
    console.log("no user ");
}

let minutes = 30 ;

switch (minutes) {

    case 'minutes >= 10 && minutes <= 30' :
    console.log("print its day");
    break ;
    
    case 'minutes >= 30 && minutes <= 40' :
    console.log("print its evening");
    break ;
    
    case 'minutes >= 30 || minutes <= 40' :
    console.log("print its afternoon ");
    break ;
    
    case 'minutes === 30' :
    console.log('good night ');
    break ;    

    default :
    console.log ("no minutes ");
}
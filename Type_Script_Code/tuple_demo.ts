//creating a tuple - to hold different types of data 

var employeedetails = [10 , "John" , 400000] ;// this is one way of declaring it 
console.log('Tuple declaration :' , employeedetails);
console.log('******************************************************');
//access the specific element inside the tuple 
console.log('Accessing specific element :' , employeedetails[1]);
console.log('******************************************************');


//another way of declaring tuples is to declare the tuple data type 
var employee_details :[number , string , boolean] = [20 , "Chris" , true];
console.log('Tuples details :' , employee_details);
console.log('******************************************************');
console.log(employee_details.forEach(ele => console.log('Each tuples elements :' , ele)));
console.log('******************************************************');
//to add element inside the tuple using the push method 
employee_details.push(234.5, "Barry", false)
console.log('Updated Tuples details :' , employee_details);
console.log('******************************************************');
//remove the elements inside the tuple - pop() method 
employee_details.pop() ;//remove the elements from the tuple - last element will be removed 
console.log('Updated Tuples details after removal :' , employee_details);
console.log('******************************************************');
//update element inside the tuple - to update specific element inside the tuple 
employee_details[1] = "Chris Welloughbourne" ;
console.log('Updated Tuples details after adding :' , employee_details);
console.log('******************************************************');
//create a tuple array of values 

var student_details : [number , string] [] ;
//create a array inside the tuples 
student_details = [ [102, "Smith"] , [201, "Harry"] , [301, "Brook"] ] ;
console.log('Updated Student details :' , student_details);
//to retrieve the details inside the tuple 
console.log(student_details[0]);
console.log('******************************************************');
//to retrieve specific value inside the array tuple 
console.log(student_details[1][0]);
console.log('******************************************************');








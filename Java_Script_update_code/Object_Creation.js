//Object is a collection of properties - name and values 
//Object is non primitive data types 
//Create empty object 
let obj1 = {} 
console.log(typeof obj1);
console.log('*********************************');

//create an object with all types of data types 
let obj_02 = {
    "Name": "Kumar Jiten",
    "Address": "Sydney",
    "Age": 34,
    isMarried : true,
    12:13
}
console.log(typeof obj_02);
//to retrieve each of the Address values 
console.log(obj_02.Address);
//to retrieve each of the other attribute values 
console.log(obj_02["isMarried"]);
console.log('*********************************');

//to add an object value inside the existing Object 
obj_02.Salary = "1000"
obj_02.Experience = "QA"
//after adding verify the new object
console.log(obj_02);
console.log('*********************************');
//to delete an existing object property 
delete obj_02.Salary ;
console.log(obj_02);
console.log('*********************************');


//Nested Object Examples - on how to have One Object inside another object 
let obj_03 = {
    "State" : "NSW" ,
    "Country": "Australia"
}

//lets try to add this Obj_03 inside the first Object - Obj_01
obj_02.fullAddress = obj_03 ;
//here the fullAddress is the key name which we are trying to add inside the object 
console.log(obj_02);

//to add an array of values inside the object 
obj_02.jobs = ['Business Analyst' , 'Lead QA' , 'Data Analyst']
console.log(obj_02);
console.log('*********************************');

//to retrieve the nested object values from the object
console.log(obj_02.fullAddress.State);
//another way of doing the same thing 
console.log(obj_02['fullAddress']['Country']);
console.log('*********************************');

//to access the array values inside the object use the indexing concept 
console.log(obj_02['jobs'][1]);
//alternate way of doing the same thing 
console.log(obj_02.jobs[2]);
console.log('*********************************');

//to create a function inside the object and later on call the function 
obj_02.myfunction = function()
{

    console.log('My Hello JS');

}

console.log(obj_02);
console.log('*********************************');
//to call the function which is defined inside the object 
obj_02.myfunction ();   
console.log('*********************************');


//in java script object is addressed by reference not the values 
let my_obj = obj_02 
obj_02.city = 'Rockdale'
console.log(obj_02);
console.log('*********************************');

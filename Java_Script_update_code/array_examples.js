//create an empty array 
let my_emptyArray = [] 
console.log('Empty Array :' + my_emptyArray);
console.log('***********************************************');

let my_array = [10 , 20 , 'Kumar' , true] ;
//array is also non primitive data type - having object data type 
console.log(typeof my_array);
console.log('Array elements :' + my_array);
//to get the third element of the array -use the indexing part 
console.log('Third  Array element :' + my_array[2]);
console.log('***********************************************');
//lets give an index of the element which is not existing inside an array 
console.log(my_array[5]);// it will not throw any exception in the output we can see it as undefined data type 
console.log('***********************************************');

//access the array length 
console.log(my_array.length);
console.log('***********************************************');
console.log(my_array[my_array.length -2]);
console.log('***********************************************');

//to add the element inside the array using the push method - it will append the element inside the end of the array
console.log(my_array.push('Aadya'));
console.log('New Array Elements :' + my_array);
console.log('***********************************************');

//to add the element at the starting of the array using the unshift method
console.log(my_array.unshift('Priya'));
console.log('Updated elements inside array :' + my_array);
console.log('***********************************************');

//to remove the element inside the array using the pop method which removes the last element of the array 
console.log(my_array.pop());
console.log('Updated elements after removal :' + my_array);
console.log('***********************************************');

//to remove the first element inside the array using the shift method 
console.log(my_array.shift());
console.log('Updated elements after removing first element  :' + my_array);
console.log('***********************************************');

//to remove certain elements from the array from any index position - specify the start and end poistion 
console.log(my_array.splice(1, 2));
console.log('Updated elements after the removal :' + my_array);
console.log('***********************************************');

//to add the two array - to have one array inside one array 
let array1 = [10 , 'Jiten' , 30] ;
let array2 = [20 , 'Kumar' , true, null, undefined] ;
//using the push method append the second array inside the last element 
console.log( array1.push(array2));
console.log('Updated nested array element :' + array1);
console.log('***********************************************');

//to retrieve the nested array element using the index 
console.log(array1[3][4]);
console.log('***********************************************');


//to add an object inside the array element 
let obj1 = {
    "name"     : "Kumar Jitendra" ,
    "language" : "JavaScript"
}

array1.push(obj1);
console.log(array1);
console.log('***********************************************');

//to retirve the object value from the array element 
console.log(array1[4]["name"]);
console.log(array1[4].language);
console.log('***********************************************');
//to use the for loop to iterate over the array 

for (let i = 0 ; i < array1.length ; i ++ ) {
    //to print each of the elements 
    console.log(array1[i]);

    if (array1[i]['name'] == 'Kumar Jitendra') {
        console.log('Matching values');
        break ;

    }else {
        console.log('Not Matching Values');
    }
}
console.log('***********************************************');

//using the for each loop to iterate 
for (let values in array1) {
    console.log( array1[values]);
}
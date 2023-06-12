const colors = ['red' ,'green'];

//print the values inside the array 
console.log(colors);
//output - [ 'red', 'green' ]

//length of the array
console.log(colors.length);//output - 2

//to fetch the values for 0th and 1st position
console.log(colors[1]);//output - green

console.log(colors[2]);//output - undefined error will come - as unlike java it doesnt gives array index out of bounds exception error 



//to add elements inside the end of array 
colors.push('blue','yellow');
console.log(colors);
//output - [ 'red', 'green', 'blue', 'yellow' ]

//to add elements at the beginning of the array 
colors.unshift(1,2,'pink');
console.log(colors);
//output - [ 1, 2, 'pink', 'red', 'green', 'blue', 'yellow' ]

//to add elements at the middle of the array 
colors.splice(3,0,'middle element',9);//2nd parameter is to delete any values -if given 0 it will not delete any element 
console.log(colors);
//output - [ 1, 2, 'pink', 'middle element', 9, 'red', 'green', 'blue', 'yellow' ]

console.log('---------------');
//to iterate over the elements inside the arrays 
for (const values in colors){
console.log(colors[values]);
}

console.log('---------------');
for (let keys of colors)
console.log(keys);

console.log('---------------');

//to find elements inside the array :[primitive type]

let properties = [1,2,3,1,'green','red'];
console.log(properties.indexOf(2));//first occurence 
//it will return the index of the element --indexof method 
console.log(properties.indexOf('green'));

console.log(properties.indexOf('yellow'));//it will return = -1,if the element is not searched inside an array 

console.log(properties.indexOf(1,3));//it will print 3 - first parameter is from where to start the search 
console.log('---------------');
console.log(properties.indexOf(1,properties.indexOf(1)+1));//it will also print 3 

console.log('---------------');
console.log(properties.indexOf(2)!== 4);//it will give true 

//includes method to search element inside an array 

console.log(properties.includes(2));
console.log(properties.includes('green'));//it will return true 

console.log('---------------');
//to find elements inside the array :[reference  type - objects inside an array ]
//array having objects 

const referential = [
//objects inside an array 
    {id : 1, name : 'javascript'},//0th element index
    {id : 2 ,name : 'python'}//1st element index 

];

console.log(referential.includes( {id : 1, name : 'javascript'}));//it will return false as reference is different -memory allocation is different 

const c1 = referential.find(function(element) {
     return element.name === 'javascript'
} );

console.log(c1) ;
//{ id: 1, name: 'javascript' }-- it will return the following element 

const c2 = referential.find(function(element) {

    return element.name === 'python'
});
console.log(c2);
//to print each element 
console.log(c2.name) ;
console.log(c1.id) ;

//to search the index 
const c3 = referential.findIndex(function(element) {

    return element.name === 'python'
});

console.log(c3);

//writing the same search using the lamba function --find can also be writen like this 

 const c4 = referential.find (element => element.name == 'python') ;
 console.log (c4) ;




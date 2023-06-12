//remove the element inside the array 

//pop method - to remove the last element of the array and pop method also returns the array 
let aadya = [1,2,3,4,'green'];
//copy the values inside an array 
let another = aadya ;
console.log(aadya);
console.log(another);

const last  =  aadya.pop();
console.log('last element of array after removal' + '-' + last);//output - lasteleenent - green it will return 
console.log('updated array after removal' + '-' + aadya) ;//output - 1,2,3,4 



//shift method - it removes the element inside the array 
const first  =  aadya.shift() ;
console.log('first element of array after removal' + '-' + first);//output - lasteleenent - green it will return 
console.log('updated array after removal' + '-' + aadya) ;//output - 1,2,3,4 

//splice method to remove the element at the middle of the aaray 

const middle = aadya.splice(2,2) ;// first parameter is the start of the element from where to remove and the second parameter is to remove 
//the count of elements - how many elements to remove 
console.log('removing middle :' +"- " + middle) ;//outpit - 4 
console.log ('updated array after removal :' + aadya) ;//output - 2,3 

aadya.splice(2);//it will remove everything starting from the 3rd element 
console.log(aadya) ;

//empty  an array --1st method //only use when its having one reference - no other reference is present 
// aadya = [];
// console.log(aadya) ;

//2nd way to empty an array using length method 
// aadya.length = 0 ;
// console.log ('empty array :' + "- " + aadya);

//3rd way more good way - using splice method to remove the content of the array 
another.splice(0,another.length) ;
console.log(another);

//4th method is using the pop method -- not so useful 

while (aadya.length>0)
aadya.pop

console.log(aadya) ;
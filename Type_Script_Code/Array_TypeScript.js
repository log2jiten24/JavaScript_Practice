//Array in typescript can hold any value type data 
//usage of single dimension array 
//first approach to create array - declaration and initialisation 
var fruits1 = ["Apples", "Mangoes", "Banana"];
console.log('String array :', fruits1);
console.log('*****************************************');
//to print each element inside the array -use the indexing part 
console.log(fruits1[1]);
console.log('*****************************************');
//usage of for each loop to print each element inside the array 
fruits1.forEach(function (ele) { return console.log(ele); });
console.log('*****************************************');
//second way to create array is first declaraion 
var fruits2; //declaration
fruits2 = ["Strawberry", "Blueberry", "Oranges"]; // initialisation 
console.log('String array second type :', fruits2);
console.log('*****************************************');
for (var index = 0; index < fruits2.length; index++) {
    console.log('Each element : ', fruits2[index]);
}
console.log('*****************************************');
//array in JS - can hold any data type 
var fruits3 = [10, true, "Mandarins", undefined];
console.log('Print JS Array :', fruits3);
console.log('*****************************************');
//usage of for in loop to print each value inside the array 
for (var ele in fruits3) {
    console.log('Each element using for In Loop :', fruits3[ele]);
}
console.log('*****************************************');
// in TS - we also can have any data type array 
var fruits4 = [true, undefined, null, 10.3, "Berryfruits"];
console.log('All TS fruit data types :', fruits4);
console.log('*****************************************');
for (var _i = 0, fruits4_1 = fruits4; _i < fruits4_1.length; _i++) {
    var elements = fruits4_1[_i];
    console.log('Each element using for Out Loop : ', elements);
}
console.log('*****************************************');
//in TS - multi dimensions - to have combinaton of two data type declaration in an array 
var values_01 = ["Delhi", 10, 10.5];
console.log('Combination of two Data Type Array :', values_01);
console.log('*****************************************');
values_01.forEach(function (ele) { return console.log(ele); });
console.log('*****************************************');
//Creating two dimensional array 
var myarray = [[10, 20], [20, 30], [20.5, 10.3]]; //creating two dimensional array 
console.log('Two dimensional array', myarray);
console.log('*****************************************');
console.log('Accessing element : ', myarray[1][0]);
console.log('Accessing element : ', myarray[2][1]);
console.log('*****************************************');
//usage of for in loop to iterate over the two dimensional array 
for (var row_value in myarray) //to iterate over the first row - 0th row 
 {
    for (var col_value in myarray[row_value]) //to iterate over the column of the each row 
     {
        console.log('Row and column value of 2D Array ', myarray[row_value][col_value]);
    }
}
console.log('*****************************************');
//Creating mutli deimesnional array of two different data types 
var myarray_02 = [["abc", 1], ["xyz", 2], [3, "wyz"]];
console.log(myarray_02);
console.log('*****************************************');
console.log('Accessing element : ', myarray_02[1][0]);
console.log('Accessing element : ', myarray_02[2][1]);
//using for loop to iterate over the rows and columns 
console.log('*****************************************');
for (var j = 0; j < myarray_02.length; j++) //iterate over each row 
 {
    for (var k = 0; k < myarray_02[j].length; k++) // iterate over each column inside the row  
     {
        console.log('Each Array elements in two dimensional array :', myarray_02[j][k]);
    }
}
console.log('*****************************************');

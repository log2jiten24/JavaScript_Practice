//usage of while loop 

var i : number = 2 ;

while (i < 10) {

    console.log(i);
    //do the increment everytime - increment by 2 everytime 
    i += 2 ;
}
console.log('**************************');

//usage of do while loop 

var j : number = 10 ;
//in the do while condition - statement will be evaluated at least once without evaluating the condition 
do {
console.log(j);
j +=4 ;
} while (j <=20);

console.log('**************************');

//usage of for loop 

for (let w:number = 8; w>=0 ; w-=2 ) {

    console.log('Print each number' , w);
    
}
console.log('**************************');

//usage of break and continue statement 

for (let w:number = 8; w<=20 ; w+=2 ) {
    
    if (w == 14) {
    console.log('Print under the break statement' , w);
    break;
    }
    console.log('Print each number' , w);
}
console.log('**************************');

//usage of continue statement 
for (let w:number = 8; w<=20 ; w+=2 ) {
    
    if (w == 14) {
    console.log('Print under the continue statement' , w);
    continue;
    }
    console.log('Print each number' , w);// this will skip the continue statement 
}
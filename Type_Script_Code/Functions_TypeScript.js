//create the named function 
function welcome_display() {
    console.log('Welcome to TypeScript');
}
console.log('**********************************');
//call the function 
welcome_display();
console.log('**********************************');
//create a named function with passing parameters and having return type 
function sumofNumbers(x, y) {
    return x + y;
}
console.log('**********************************');
console.log(sumofNumbers(100, 200)); // this will give output as 300
console.log('**********************************');
//-----------------ANONYMOUS FUNCTION -- FUNCTION WITHOUT ANY NAME ------------------------//
var result_01 = function () {
    console.log('Anonymous Function getting called ');
};
//call the function with the variable name 
result_01();
console.log('**********************************');
//Anonymous functions with arguments and return type 
var results_update = function (w, y) {
    return w + y;
};
//call the function 
console.log(results_update(10, 20)); //call the function -output is 30
console.log('**********************************');

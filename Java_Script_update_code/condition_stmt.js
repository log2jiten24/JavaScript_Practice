//to check the condition on particular condition -if else block 
if (true) {
    console.log('Condition satisfied');
}
console.log('***************************');

if (false){
    console.log('condition not satisfied');
}
console.log('***************************');

//to have the if -else block 
if (10 > 20 ) {
    console.log('Condition satisfied');
} else {
    console.log('Condition not satisfied');
}
console.log('****************************');

//to have the if else if block with else block 

let browserName = "Edge"

if(browserName.includes("Chrome")) 
{
    console.log('Chrome Browser Started');

} else if(browserName.includes("Edge")) 
{
    console.log("Edge Browser Started");
    
} else if (browserName.includes("Firefox") || browserName.includes("FF")) //usage of OR Statement 
{
    console.log('Firefox Browser started');
}else 
{
    console.log('No Browser Name found ');
}
console.log('****************************');

//Same condition we will do with switch statement 

let day = new Date().getDay()
console.log('Print the Day', day);

switch (day) {
    case 0:
        console.log('Sunday Print ');
     break;
    case 1:
        console.log('Monday Print ');
    break;
    case 2:
        console.log('Tuesday');
    break;
    default:
        console.log('No Day Week Found ');
    break;
}
console.log('****************************');

let prog_lang = "Java_Script"
console.log('Prog lang : ' , prog_lang);

switch (prog_lang) 
{
    case "Java":
        console.log('Java Print in log');
        break;
    
    case "Java_Script":
        console.log('Java_Script found and printed');
        break ;
    
    case "VB_Script":
        console.log('Java_Script found and printed');
        break ;
    default:
        console.log('No Prog Language found');

}

console.log('****************************');
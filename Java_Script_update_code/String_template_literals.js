//\t is used for tab spacing - and \n is used for new line 
let msg = 'Final \t amount is \'300\' \n 300 AUD' ;
console.log('Final Message is :' + msg);
console.log('***************************************');

//if we dont need to use the backward slash then we need to use the ``
let newmsg = `Final amount is '300'
 AUD `
console.log('Final Amount is :' + newmsg);
console.log('***************************************');

//to replace with new variable 
let x = 90 ;
let newMsg = `Final amount is ${x} AUD` ;
console.log(newMsg);
console.log('***************************************');

//to reteive the String character from certain start point to end point 
let newMsgupdate = 'My name is Kumar' ;
console.log(newMsgupdate.slice(0,10));
console.log('***************************************');


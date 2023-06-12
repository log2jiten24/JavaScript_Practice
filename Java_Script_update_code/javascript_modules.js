//Create two functions 

function showNames (studentName){
    console.log('Display Student Name : ',`${studentName}`);
}

function showAddress (HouseNumber , HouseStreet) {
    console.log('Display Address Details :' , `${HouseNumber} -  ${HouseStreet}`);
}

//export the particular function - this function can be reused again 
module.exports = {showAddress, showNames}

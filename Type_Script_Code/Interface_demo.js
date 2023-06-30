//creating an interface - where we dont give the method body 
//access the interface variables inside the var 
var interface_access = {
    //pass the variables
    empNum: 4566,
    emp_dept: "CSE",
    emp_reg: "Professor",
    display: function () {
        console.log(this.empNum + " " + this.emp_dept + " " + this.emp_reg);
    }
};
//access the variables 
console.log(interface_access.empNum);
console.log(interface_access.emp_dept);
console.log(interface_access.emp_reg);
//access the method 
console.log(interface_access.display());

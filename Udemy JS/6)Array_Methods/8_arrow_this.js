// keyword THIS behaves differently in an arrow function and a normal function.

const person = {
    firstName: 'Khitam',
    lastName: 'Al Sibai',
    fullName: ()=> {return `${this.firstName} ${this.lastName}`}
}

// this gives an error becasue the 'THIS' keyword gives the WINDOW OBJECT. IT DEPENDS UPON WHERE AND WHICH SCOPE THE ARROW FUNCTION IS CALLED IN.
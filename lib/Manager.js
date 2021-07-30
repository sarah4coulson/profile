const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, officeNumber){
        super(name, id, email)
        this.officeNumber = officeNumber
    }
getRole(){
    return'Manager'
}
getoffNum(){
    let officeNumber = this.officeNumber
    return this.officeNumber
}

} 
module.exports = Manager;
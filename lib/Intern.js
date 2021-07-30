const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, school){
        super(name, id, email)
        this.school = school
    }
getRole(){
    return'Intern'
}
getSchool(){
    let school = this.school
    return this.school
}
} 
module.exports = Intern;
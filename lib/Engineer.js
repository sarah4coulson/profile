const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, github){
        super(name, id, email)
        this.github = github
    }
getRole(){
    return'Engineer'
}
getGitHub(){
    let github = this.github;
    return this.github
}
} 
module.exports = Engineer;
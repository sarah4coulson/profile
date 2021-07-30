class Employee {
 constructor(name, id, email){
     this.name = name;
     this.id = id;
     this.email = email;

 }
 getName(){
     let name = this.name
     return this.name}

 getId(){
     let id = this.name
     return this.id}

 getEmail(){
    let email = this.email
    return this.email}

 getRole(){
     return 'Employee'}
 
}

module.exports = Employee;

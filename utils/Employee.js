class Employee {
  constructor(name, email, ID) {
    this.name = name 
    this.email = email
    this.ID = ID
    this.role = "Employee"
  }

  getName() {
    return this.name;
  }

  getId() {
    return this.ID ;
  }

  getEmail() {
   
    return this.email;
  }

  getRole() {
   
   return this.role;
  }
}

module.exports = Employee;

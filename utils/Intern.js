const Employee = require("./Employee");

class Intern extends Employee {
  constructor(name, email, ID, school) {
    super(name, email, ID);
    this.school = school;
    this.role = "Intern";
  }

  getName() {
    return this.name;
  }

  getId() {
    return this.ID;
  }

  getEmail() {
    return this.email;
  }

  getschool() {
    return this.school;
  }

  getRole() {
    return this.role;
  }
}

module.exports = Intern;

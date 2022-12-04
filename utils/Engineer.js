const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, email, ID, GitHub) {
    super(name, email, ID);
    this.GitHub = GitHub;
    this.role = "Engineer";
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

  getGithub() {
    return this.GitHub;
  }

  getRole() {
    return this.role;
  }
}

module.exports = Engineer;

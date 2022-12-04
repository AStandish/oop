const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, email, ID, officeNo) {
    super(name, email, ID);
    this.officeNo = officeNo;
    this.role = "Manager";
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

  getOfficeNo() {
    return this.officeNo;
  }

  getRole() {
    return this.role;
  }
}

module.exports = Manager;

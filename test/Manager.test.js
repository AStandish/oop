const Manager = require("../utils/Manager");
const Employee = require("../utils/Employee");

test("Can get name via getOfficeNo()", () => {
  const testValue = "123";
  const e = new Manager("Alice", "alice@gmail.com", "23", testValue);
  expect(e.getOfficeNo()).toBe(testValue);
});

const Engineer = require("../utils/Engineer");
const Employee = require("../utils/Employee");

test("Can get name via getGithub()", () => {
  const testValue = "Alice@github.com";
  const e = new Employee(testValue);
  expect(e.getGithub()).toBe(testValue);
});

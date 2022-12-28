const Intern = require("../utils/Intern");
const Employee = require("../utils/Employee");

test("Can get name via getSchool()", () => {
  const testValue = "UNH";
  const e = new Intern("Alice", "23", "alice@gmail.com", testValue);
  expect(e.getSchool()).toBe(testValue);
});

const Intern = require("../utils/Employee");

test("Can get name via getSchool()", () => {
  const testValue = "UNH";
  const e = new Employee(testValue);
  expect(e.getSchool()).toBe(testValue);
});

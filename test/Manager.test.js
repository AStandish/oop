const Manager = require("../utils/Employee");

test("Can get name via getOfficeNo()", () => {
  const testValue = "123";
  const e = new Employee(testValue);
  expect(e.getOfficeNo()).toBe(testValue);
});

const Engineer = require("../utils/Engineer");
const Employee = require("../utils/Employee");

test("Can get name via getGithub()", () => {
  const testValue = "Alice@github.com";
  const e = new Engineer("Alice", "alice@gmail.com", "23", testValue);
  expect(e.getGithub()).toBe(testValue);
});

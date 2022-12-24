const Employee = require("../utils/Employee");

test("Can instantiate Employee instance", () => {
  const e = new Employee();
  expect(typeof e).toBe("object");
});

test("Can set name via constructor arguments", () => {
  const name = "Alice";
  const e = new Employee(name);
  expect(e.name).toBe(name);
});

test("Can set id via constructor argument", () => {
  const testValue = 100;
  const e = new Employee("Foo", testValue);
  expect(e.ID).toBe(testValue);
});

test("Can set email via constructor argument", () => {
  const testValue = "test@test.com";
  const e = new Employee("Foo", 1, testValue);
  expect(e.email).toBe(testValue);
});

test("Can get name via getName()", () => {
  const testValue = "Alice";
  const e = new Employee(testValue);
  expect(e.getName()).toBe(testValue);
});

test("Can get name via getID()", () => {
  const testValue = "2";
  const e = new Employee(testValue);
  expect(e.getID()).toBe(testValue);
});

test("Can get name via getEmail()", () => {
  const testValue = "Alice@gmail.com";
  const e = new Employee(testValue);
  expect(e.getEmail()).toBe(testValue);
});

test("Can get name via getRole()", () => {
  const testValue = "employee";
  const e = new Employee(testValue);
  expect(e.getRole()).toBe(testValue);
});

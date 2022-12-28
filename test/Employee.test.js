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
  const e = new Employee("Foo", "alice@gmail.com", testValue);
  expect(e.ID).toBe(testValue);
});

test("Can set email via constructor argument", () => {
  const testValue = "test@test.com";
  const e = new Employee("Foo", testValue, 1);
  expect(e.email).toBe(testValue);
});

test("Can get name via getName()", () => {
  const testValue = "Alice";
  const e = new Employee(testValue);
  expect(e.getName()).toBe(testValue);
});

test("Can get name via getID()", () => {
  const testValue = "2";
  const e = new Employee("alice", "23", testValue);
  expect(e.getId()).toBe(testValue);
});

test("Can get name via getEmail()", () => {
  const testValue = "Alice@gmail.com";
  const e = new Employee("Alice", testValue);
  expect(e.getEmail()).toBe(testValue);
});

test("Can get name via getRole()", () => {
  const testValue = "Employee";
  const e = new Employee(testValue);
  expect(e.getRole()).toBe(testValue);
});

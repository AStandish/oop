it("should create an object with a school if provided valid arguments", () => {
  const school = new school("UNH");

  expect(school.school).toEqual("UNH");
});

it("should throw an error if provided no arguments", () => {
  const cb = () => new school();

  expect(cb).toThrow();
});

it("should throw an error if 'school' is not a string", () => {
  const cb = () => new Employee(3, 2);
  const err = new Error("Expected parameter 'school' to be a non-empty string");

  expect(cb).toThrowError(err);
});

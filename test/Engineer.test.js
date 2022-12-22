it("should create an object with a Github name if provided valid arguments", () => {
  const github = new github("Sarah@github.com");

  expect(github.github).toEqual("Sarah@github.com");
});

it("should throw an error if provided no arguments", () => {
  const cb = () => new github();

  expect(cb).toThrow();
});

it("should throw an error if 'github' is not a string", () => {
  const cb = () => new Employee(3, 2);
  const err = new Error("Expected parameter 'github' to be a non-empty string");

  expect(cb).toThrowError(err);
});

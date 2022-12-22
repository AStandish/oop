it("should throw an error if not provided an Office No", () => {
  const cb = () => new Employee("Sarah");
  const err = new Error(
    "Expected parameter 'Office No' to be a non-negative number"
  );

  expect(cb).toThrowError(err);
});

it("should throw an error if 'Office No' is not a number", () => {
  const cb = () => new Employee("Sarah", "2");
  const err = new Error(
    "Expected parameter 'Office No' to be a non-negative number"
  );

  expect(cb).toThrowError(err);
});

it("should throw an error if 'Office No' is less than 0", () => {
  const cb = () => new Employee("Sarah", -1);
  const err = new Error(
    "Expected parameter 'Office No' to be a non-negative number"
  );

  expect(cb).toThrowError(err);
});

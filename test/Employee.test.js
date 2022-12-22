const Employee = require("../Employee");

describe("getName", () => {
  describe("Initialization", () => {
    it("should create an object with a name if provided valid arguments", () => {
      const name = new Name("Sarah");

      expect(name.name).toEqual("Sarah");
    });

    it("should throw an error if provided no arguments", () => {
      const cb = () => new Name();

      expect(cb).toThrow();
    });

    it("should throw an error if not provided an ID", () => {
      const cb = () => new Employee("Sarah");
      const err = new Error(
        "Expected parameter 'ID' to be a non-negative number"
      );

      expect(cb).toThrowError(err);
    });

    it("should throw an error if 'name' is not a string", () => {
      const cb = () => new Employee(3, 2);
      const err = new Error(
        "Expected parameter 'name' to be a non-empty string"
      );

      expect(cb).toThrowError(err);
    });

    it("should throw an error if 'ID' is not a number", () => {
      const cb = () => new Employee("Sarah", "2");
      const err = new Error(
        "Expected parameter 'ID' to be a non-negative number"
      );

      expect(cb).toThrowError(err);
    });

    it("should throw an error if 'ID' is less than 0", () => {
      const cb = () => new Child("Sarah", -1);
      const err = new Error(
        "Expected parameter 'ID' to be a non-negative number"
      );

      expect(cb).toThrowError(err);
    });

    it("should create an object with a name if provided valid arguments", () => {
      const Email = new Email("Sarah@gmail.com");

      expect(Email.Email).toEqual("Sarah@gmail.com");
    });

    it("should throw an error if provided no arguments", () => {
      const cb = () => new Email();

      expect(cb).toThrow();
    });

    it("should throw an error if 'email' is not a string", () => {
      const cb = () => new Employee(3, 2);
      const err = new Error(
        "Expected parameter 'email' to be a non-empty string"
      );

      expect(cb).toThrowError(err);
    });

    it("should create an object with a name if provided valid arguments", () => {
      const role = new Role("Sarah");

      expect(role.role).toEqual("Sarah");
    });

    it("should throw an error if provided no arguments", () => {
      const cb = () => new Role();

      expect(cb).toThrow();
    });

    it("should throw an error if 'role' is not a string", () => {
      const cb = () => new Employee(3, 2);
      const err = new Error(
        "Expected parameter 'role' to be a non-empty string"
      );

      expect(cb).toThrowError(err);
    });
  });
});

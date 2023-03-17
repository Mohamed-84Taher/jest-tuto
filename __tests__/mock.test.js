const mocker = require("../mock");

test("Mock Function", () => {
  const mocker = jest.fn((name) => `Hello ${name}`);
  expect(mocker("taher")).toBe("Hello taher");
  expect(mocker("assia")).toBe("Hello assia");
  expect(mocker("amen")).toBe("Hello amen");
  expect(mocker).toHaveBeenCalled();
  expect(mocker).toHaveBeenCalledTimes(3);
  expect(mocker).toHaveBeenCalledWith("amen");
  expect(mocker).toHaveBeenLastCalledWith("amen");
});

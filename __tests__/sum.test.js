const theSum = require("../sum");

describe("Check The Numbers Sum Total", () => {
  describe("Check If No Numbers or Only One Number", () => {
    test("Return 0 if no number", () => {
      expect(theSum()).toBe(0);
    });

    test("Return The Number", () => {
      expect(theSum(5)).toBe(5);
    });
  });
  describe("Check More Than one Number", () => {
    test("Return The sum of num1 and num2", () => {
      expect(theSum(5, 10)).toBe(15);
    });

    test("Return The sum of num1 and num2 and num3", () => {
      expect(theSum(5, 10, 20)).toBe(35);
    });
  });
});

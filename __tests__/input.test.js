const filterName = require("../input");

describe("Check The Input Field", () => {
  test("Check If Name is Empty", () => {
    expect(filterName()).toBe("Unknown");
  });

  test("Check for Spaces (Start + End)", () => {
    expect(filterName(" Taher ")).toBe("Taher");
  });

  test("Check If Name Length More Than 10 characters", () => {
    expect(filterName("Mohamed Taher Ben Arbia")).toBe("Mohamed Ta");
  });

  test("Check If Name Starts With _", () => {
    expect(filterName("_Taher")).toBe("Taher");
  });
  test.skip("Check If Name Not allowed", () => {
    expect(filterName("Hell")).toBe("Hell");
  });
});

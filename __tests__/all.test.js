const allData = require("../all");

test("Check If Array Contains 6 Elements", () => {
  expect(allData.length).toBe(6);
});

test("Check If Array Contains 6 Elements", () => {
  expect(allData).toHaveLength(6);
});

test("Check If Array Contains Number 3", () => {
  expect(allData).toContain(3);
});

test("Check If Array not Contains 6", () => {
  expect(allData).not.toContain(6);
});

test("Check If Array not Contains 0 (use js)", () => {
  for (let i = 0; i < allData.length; i++) {
    expect(allData[i]).not.toBe(6);
  }
});

test("Check If Array Contains Only Numbers 1st Method", () => {
  for (let i = 0; i < allData.length; i++) {
    expect(isNaN(allData[i])).toBeFalsy();
  }
});

test("Check If Array First Element greater than 1 ", () => {
  expect(allData[0]).toBeGreaterThanOrEqual(1);
});

test("Check For Undefined", () => {
  let a;
  expect(a).toBeUndefined();
});

test("Check For substring Inside String By RegExp", () => {
  let myString = "I Do everything to acheive my purpose ";
  expect(myString).toMatch(/Every/i);
});

test("Check If Object has property age", () => {
  let object = {
    name: "taher",
    age: 38,
  };
  expect(object).toHaveProperty("age", 38);
});

expect.extend({
  toBeLargerThan: (received, target) => {
    const pass = received > target;
    if (pass) {
      return {
        message: () => `Expected ${received} Larger than ${target}`,
        pass: true,
      };
    } else {
      return {
        message: () => `Error : Expected ${received} Larger than ${target}`,
        pass: false,
      };
    }
  },
});

test("Check If Number is Larger than other number", () => {
  expect(10).toBeLargerThan(8);
});

expect.extend({
  toBeBetween: (received, start, end) => {
    const pass = received > start && received < end;
    if (pass) {
      return {
        message: () => `Expected ${received} between ${start} and ${end}`,
        pass: true,
      };
    }
    return {
      message: () => `Error : Expected ${received} between ${start} and ${end}`,
      pass: false,
    };
  },
});

test("Check If Number is Between start and end", () => {
  expect(10).toBeBetween(8, 12);
});

// expect.anything() => Anything except undefined + null
test("expect Anything", () => {
  let a = 0;
  expect([]).toEqual(expect.anything());
  expect(a).toEqual(expect.anything());
});

// expect.anything() => Anything except undefined + null
test("expect Any (constructor)", () => {
  expect(10).toEqual(expect.any(Number));
});

// expect.arrayContaining(array)
test.only("expect Array containning array", () => {
  let myArray = [1, 2, 3, 4, 5];
  expect(myArray).toEqual(expect.arrayContaining([1, 2]));
});

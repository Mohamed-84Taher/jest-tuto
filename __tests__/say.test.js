const say = require("../say");

test("Jest Say Hello", () => {
  expect(say()).toBe("Hello Jest");
});

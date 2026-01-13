const reverseString = require("./reverseString");

test("reverses the string", () => {
  const testString = "fart";
  expect(reverseString(testString)).toBe("traf");
});

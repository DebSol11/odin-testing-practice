const ceasarCipher = require("./ceasarCipher");

test("check if shifting works", () => {
  const testString = "xyz";
  expect(ceasarCipher(testString, 3)).toBe("abc");
});

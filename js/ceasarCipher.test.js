const ceasarCipher = require("./ceasarCipher");

test("check if shifting works", () => {
  const testString = "xyz";
  expect(ceasarCipher(testString, 3)).toBe("abc");
});

test("check for 100% branch coverage", () => {
  const testString = "abc";
  expect(ceasarCipher(testString, 5)).toBe("fgh");
});

test("check test case prevention", () => {
  const testString = "HeLLo";
  expect(ceasarCipher(testString, 3)).toBe("KhOOr");
});

test("test punctuation, spaces, and other non-alphabetical characters", () => {
  const testString = "Hello, World!";
  expect(ceasarCipher(testString, 3)).toBe("Khoor, Zruog!");
})

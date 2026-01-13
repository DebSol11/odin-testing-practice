const capitalize = require("./capitalize");

test("check if first letter got capitalized", () => {
  const testString = "fart";
  expect(capitalize(testString)).toMatch(/^[A-Z]/);
});

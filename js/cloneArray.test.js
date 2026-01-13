const cloneArray = require("./cloneArray");

test("check if the two arrays are equal", () => {
  const array = [1, 2, 3];
  expect(cloneArray(array)).toEqual(array);
  expect(cloneArray(array)).not.toBe(array);
});

const calculator = require("./calculator.js");

test("check if sum   works", () => {
  expect(calculator.add(2, 2)).toBe(4);
});

test("check if subtraction works", () => {
  expect(calculator.sub(7, 2)).toBe(5);
});

test("check if multiplication works", () => {
  expect(calculator.mul(7, 2)).toBe(14);
});

test("check if division works", () => {
  expect(calculator.div(8, 2)).toBe(4);
});

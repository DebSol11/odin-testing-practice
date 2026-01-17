const analyzeArray  = require('./analyzeArray.js');

test("check average functionality", () => {
  expect(analyzeArray([1, 2, 3, 6]).average).toBe(3);
});

test("check average functionality", () => {
  expect(analyzeArray([1, 2, 3, 6]).min).toBe(1);
});

test("check average functionality", () => {
  expect(analyzeArray([1, 2, 3, 6]).max).toBe(6);
});

test("check average functionality", () => {
  expect(analyzeArray([1, 2, 3, 6]).length).toBe(4  );
});

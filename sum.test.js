// const { sum, multiply, substract } = require("./math");
const math = require("./math");

test("adds 2 + 2 to equal 4", () => {
  expect(math.sum(2, 2)).toBe(4);
});

test("adds 2 * 5 to equal 10", () => {
  expect(math.multiply(2, 5)).toBe(10);
});

test("adds 12 - 7 to equal 5", () => {
  expect(math.substract(12, 7)).toBe(5);
});

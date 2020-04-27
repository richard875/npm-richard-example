import Calculator from "../index";

describe("Calculator", () => {
  it("adds a and b", () => {
    const add = Calculator.prototype.sum;
    expect(add(1, 2)).toBe(3);
  });
  it("subtract a and b", () => {
    const subtract = Calculator.prototype.subtract;
    expect(subtract(3, 1)).toBe(2);
  });
  it("multiply a and b", () => {
    const multiply = Calculator.prototype.multiply;
    expect(multiply(3, 2)).toBe(6);
  });
  it("divide a and b", () => {
    const divide = Calculator.prototype.divide;
    expect(divide(10, 5)).toBe(2);
  });
});

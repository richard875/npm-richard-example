const add = (a, b) => {
  return a + b;
};

const subtract = (a, b) => {
  return a - b;
};

const multiply = (a, b) => {
  return a * b;
};

const divide = (a, b) => {
  return a / b;
};

describe("Calculator", () => {
  it("adds a and b", () => {
    expect(add(1, 2)).toBe(3);
  });

  it("subtract a and b", () => {
    expect(subtract(3, 1)).toBe(2);
  });

  it("multiply a and b", () => {
    expect(multiply(3, 2)).toBe(6);
  });

  it("divide a and b", () => {
    expect(divide(10, 5)).toBe(2);
  });
});

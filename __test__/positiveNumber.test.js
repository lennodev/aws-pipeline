function isPositive(num) {
  if (num >= 0) return true;
  return false;
}

describe("test Positive number", () => {
  it("3 is a Positive number", () => {
    expect(isPositive(17)).toBe(true);
  });
});

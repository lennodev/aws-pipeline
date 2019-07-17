function isPositive(num) {
  if (num >= 0) return true;
  return false;
}

describe("test postitive number", () => {
  it("3 is a postitive number", () => {
    expect(isPositive(17)).toBe(true);
  });
});

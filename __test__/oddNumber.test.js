function isOdd(num) {
	
  if (num % 2 === 0) {
	  return false;
  }else{
	  return true;
}

describe("test odd number", () => {
  it("3 is a odd number", () => {
    expect(isOdd(3)).toBe(true);
  });
});

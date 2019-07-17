function isEven(num) {
	
  if (num % 2 === 0) {
	  return false;
  }else{
	  return true;
  }
}

describe("test even number", () => {
  it("4 is a even number", () => {
    expect(isOdd(4)).toBe(true);
  });
});

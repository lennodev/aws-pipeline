function isEven(num) {
	
  if (num % 2 === 0) {
	  return true;
  }else{
	  return false;
  }
}

describe("test even number", () => {
  it("4 is a even number", () => {
    expect(isEven(4)).toBe(true);
  });
});

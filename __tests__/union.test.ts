describe("union type", () => {
  it("should support union type", () => {
    let sample: number | string | boolean = "Dimas";
    sample = 100;
    console.log(sample);
    sample = true;
    console.log(sample);
  });

  it("should support typeof operator", () => {
    function process(value: number | string | boolean) {
      if (typeof value === "string") {
        return value.toUpperCase();
      } else if (typeof value === "number") {
        return value + 2;
      } else {
        return !value;
      }
    }

    expect(process("Dimas")).toBe("DIMAS")
    expect(process(100)).toBe(102)
    expect(process(true)).toBe(false)
    
  });
});

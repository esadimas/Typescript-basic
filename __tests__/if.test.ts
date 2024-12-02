describe("IF statment", () => {
  it("should support in typescript", () => {
    const examValue: number = 90;

    if (examValue > 80) {
      console.log("Good");
    } else if (examValue > 60) {
      console.log("Not Bad");
    } else {
      console.log("Try Again");
    }
  });

  it("should support ternary operator", () => {
    const value = 74
    const say = value > 75 ? "congratulation" : "try again"
    console.log(say);
    
  })
});

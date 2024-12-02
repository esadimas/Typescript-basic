describe("Array", () => {
  it("should same with js", () => {
    const names: string[] = ["Esa", "Dimas", "Aditya"];
    const values: number[] = [1, 2, 3];
    console.log(names);
    console.log(values);
  });

  it("should support readonly array", () => {
    const hobbies: ReadonlyArray<string> = ["coding", "game"];
    console.info(hobbies);
    console.info(hobbies[0]);
    console.info(hobbies[1]);

    // hobbies[0] = 'hina php'
  });

  it("should support tuple", () => {
    const person: readonly [string, string, number] = ["Esa", "Dimas", 123];
    console.log(person);
    console.log(person[0]);
    console.log(person[1]);
    console.log(person[2]);
  });

 

});

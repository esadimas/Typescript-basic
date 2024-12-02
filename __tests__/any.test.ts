describe("Any", () => {
  it("should support in typescript", () => {
    const person: any = {
      id: 1,
      name: "Esa Dimas Aditya",
      age: 21,
    };

    person.id = 2;
    person.address = "London"

    console.log(person);
  });
});

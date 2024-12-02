describe("Object", () => {
  it("should support in typescript", () => {
    const person: { id: string; name: string, hobbies?: string[] } = {
      id: "1",
      name: "dimas",
    };
    console.log(person);

    person.id = "2";
    person.name = "Esa"

    console.log(person);
    
  });
});


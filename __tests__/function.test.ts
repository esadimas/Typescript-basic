describe("Function", () => {
  it("should support in typescript", () => {
    function sayHello(name: string): string {
      return `Hello ${name}`;
    }

    expect(sayHello("Dimas")).toBe("Hello Dimas");

    function printHello(name: string): void {
      console.log(`Hello ${name}`);
    }

    printHello("dimas");
  });

  it("should support default value", () => {
    function sayHello(name: string = "Guest"): string {
      return `Hello ${name}`;
    }

    expect(sayHello()).toBe("Hello Guest");
    expect(sayHello("Dimas")).toBe("Hello Dimas");
  });

  it("should support rest parameter", () => {
    function sum(...values: number[]): number {
      let total = 0;
      for (let i = 0; i < values.length; i++) {
        total += values[i];
      }

      return total;
    }

    expect(sum(1, 2, 3, 4, 5)).toBe(15);
  });

  it("should support optional parameter", () => {
    function sayHello(firstName: string, lastName?: string): string {
      if (lastName) {
        return `Hello ${firstName} ${lastName}`;
      }

      return `Hello ${firstName}`;
    }

    expect(sayHello("Dimas")).toBe("Hello Dimas");
    expect(sayHello("Dimas", "aditya")).toBe("Hello Dimas aditya");
  });

  it("should support function overloading", () => {
    function callMe(value: number): number;
    function callMe(value: string): string;
    function callMe(value: any): any {
      if (typeof value === "string") {
        return value.toUpperCase();
      } else if (typeof value === "number") {
        return value + 1
      }
    }

    expect(callMe(10)).toBe(11)
    expect(callMe("dimas")).toBe("DIMAS")
  });

  it("should support function to be parameter", () => {
    // buat function yang memilkiki dua parameter 
    // parameter pertama adalah name dan parameter kedua adalah sebuah function
    function sayHello(name: string, filter: (name: string) => string): string {
        return `Hello ${filter(name)}`
    }

    function toUpper(name: string): string {
        return name.toLocaleUpperCase()
    }

    expect(sayHello("dimas", toUpper)).toBe("Hello DIMAS")

    expect(sayHello("dimas", function(name: string): string {
        return name.toUpperCase()
    })).toBe("Hello DIMAS")

    expect(sayHello("dwi", (name: string): string => name.toUpperCase())).toBe("Hello DWI")

  })
});

import { Seller } from "../src/seller";
import { Employee, Manager } from "../src/extend-interface";
import { Person } from "../src/person";

describe("Interface", () => {
  it("should support in type", () => {
    const seller: Seller = {
      id: 1,
      name: "Toko nirwana",
      nib: "123",
      npwp: "123",
    };

    seller.name = "Toko dimas";

    console.log(seller);
  });

  it("should support function interface", () => {
    interface AddFunc {
      (value1: number, value2: number): number;
    }

    const add: AddFunc = (value1: number, value2: number): number => {
      return value1 + value2;
    };

    expect(add(2, 2)).toBe(4);
  });

  it("should support indexable interface", () => {
    interface StringArray {
      [index: number]: string;
    }

    const name: StringArray = ["Dimas", "Dwi", "Esa"];
    console.log(name);
  });

  it("should support indexable interface for non number index", () => {
    interface StringDictionary {
      [key: string]: string;
    }

    const dictionary: StringDictionary = {
      name: "Dimas",
      address: "Lamongan",
    };

    console.log(dictionary["name"]);
    console.log(dictionary["address"]);
  });

  it("should support extends interface", () => {
    const employee: Employee = {
      id: "1",
      name: "dimas",
      division: "IT",
    };

    console.log(employee);

    const manager: Manager = {
      id: "2",
      name: "Aditya",
      division: "IT",
      numberOfEmployees: 4,
    };

    console.log(manager);
  });

  it("should support function in interface", () => {
    const person: Person = {
      name: "Dimas",
      sayHello(name: string): string {
        return `Hello ${name}, my name is ${this.name}`;
      },
    };
    console.log(person.sayHello("aditya"));
  });

  it("should support intersection types", () => {
    interface HasName {
      name: string;
    }

    interface HasId {
      id: string;
    }

    type Domain = HasId & HasName;

    const domain: Domain = {
      id: "1",
      name: "Dimas",
    };

    console.log(domain);
  });

  it("should support type assertions", () => {
    const person: any = {
      name: "Dimas",
      age: 19,
    };

    const person2: Person = person as Person;
    // person2.sayHello("dimas")
    
    console.log(person2);
    
  });
});

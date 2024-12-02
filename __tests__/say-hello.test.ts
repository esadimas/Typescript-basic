import { sayHello } from "../src/say-hello";

describe("sayHello", function () {
  it("should return hello dimas", () => {
    expect(sayHello("dimas")).toBe("Hello dimas");
  });
});


import { Category, Product } from "../src/type-alias";

describe("Type Alias", () => {
  it("should support alias", () => {
    const category: Category = {
      id: 1,
      name: "Laptop",
    };

    const product: Product = {
      id: "1",
      name: "Macbook m1 pro 2020",
      price: 9000,
      category: category,
    };

    // product.desc = "lorem ipsum"
     
    console.log(category);
    console.log(product);
  });
});

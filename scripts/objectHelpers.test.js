import { createProduct, product1 } from "./helpers/objectHelpers.js";
test("check if there is a new product", function () {
    expect(createProduct(product1)).toEqual(product1);
});

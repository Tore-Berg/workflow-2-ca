import { makeUppercase, replaceSpaces, limitLength } from "./stringHelpers.js";
export const product1 = {
    id: 2,
    code: makeUppercase("asdfasdf"),
    title: limitLength(12, replaceSpaces("fdsa fdsa asdf asdf asdf"))
};
export function createProduct(product) {
    return product
}

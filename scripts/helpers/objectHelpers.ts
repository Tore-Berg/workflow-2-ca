import { makeUppercase, replaceSpaces, limitLength } from "./stringHelpers.js";

interface CreateNewProduct {
    id: number
    code: string
    title: string
}

export const product1: CreateNewProduct = {
    id: 2,
    code: makeUppercase("asdfasdf"),
    title: limitLength(12, replaceSpaces("fdsa fdsa asdf asdf asdf"))
}

export function createProduct(product: CreateNewProduct) {
    console.log(product)  
}
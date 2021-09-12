import { makeUppercase, replaceSpaces, limitLength } from "./helpers/stringHelpers";

test("check if lowercase letters are converted to uppercase", () => {
    expect(
        makeUppercase("aaa")
    ).toBe("AAA")
})

test("check if spaces are replaced with _", () => {
    expect(
    replaceSpaces("a a a")
    ).toBe("a_a_a")
})

test("check if the maximum length of string is 12", () => {
    expect(
        limitLength(12, "This is a test, to see if it limits length of the string")
    ).toBe("This is a te")
})


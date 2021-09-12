//Question 1
export function makeUppercase(str) {
    return str.toUpperCase();
}
export function replaceSpaces(str) {
    return str.replace(/\s/g, "_");
}
export function limitLength(len, str) {
    return str.substr(0, len);
}

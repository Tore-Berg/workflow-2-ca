//Question 1
export function makeUppercase(str: string) {
	return str.toUpperCase() 
}

export function replaceSpaces(str: string) {
	return str.replace(/\s/g, "_");
}

export function limitLength(len: number, str: string) {
	return str.substr(0, len);
}
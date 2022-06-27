import {
	capitalize,
	reverseString,
	calculator,
	caesar,
	analyzeArray,
} from "./practice";

test("returns with first letter capitalized", () => {
	expect(capitalize("hello")).toMatch("Hello");
});

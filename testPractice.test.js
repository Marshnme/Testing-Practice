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

test("reverses string", () => {
	expect(reverseString("hello")).toMatch("olleh");
});

test("test calculator functions", () => {
	expect(calculator.add(4, 4)).toBe(8);
	expect(calculator.sub(4, 3)).toBe(1);
	expect(calculator.multi(4, 4)).toBe(16);
	expect(calculator.divide(4, 2)).toBe(2);
});

test("shifts each char one over", () => {
	expect(caesar("hello")).toMatch("ifmmp");
	expect(caesar("abzzd")).toMatch("bcaae");
	expect(caesar("@abz!zd?")).toMatch("bcaae");
});

// test("returns with first letter capitalized", () => {
// 	expect(capitalize("hello")).toMatch("Hello");
// });

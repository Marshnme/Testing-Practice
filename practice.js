import { array } from "yargs";

const capitalize = (string) => {
	let splitString = string.split("");
	splitString[0] = splitString[0].toUpperCase();
	return splitString.join("");
};

const reverseString = (string) => {
	let splitString = string.split("");
	return splitString.reverse().join("");
};

const calculator = {
	add: function (numOne, numTwo) {
		return numOne + numTwo;
	},

	sub: function (numOne, numTwo) {
		return numOne - numTwo;
	},
	multi: function (numOne, numTwo) {
		return numOne * numTwo;
	},
	divide: function (numOne, numTwo) {
		return numOne / numTwo;
	},
};

const caesar = (string) => {
	const chars = [
		"a",
		"b",
		"c",
		"d",
		"e",
		"f",
		"g",
		"h",
		"i",
		"j",
		"k",
		"l",
		"m",
		"n",
		"o",
		"p",
		"q",
		"r",
		"s",
		"t",
		"u",
		"v",
		"w",
		"x",
		"y",
		"z",
	];
	let splitString = string.split("");
	let newWord = [];
	splitString.forEach((letter) => {
		if (chars.includes(letter)) {
			if (letter === "z") {
				newWord.push("a");
			} else {
				let newIndex = chars.indexOf(letter) + 1;
				newWord.push(chars[newIndex]);
			}
		}
	});
	return newWord.join("");
};

const analyzeArray = (array) => {
	return {
		average: Math.round(array.reduce((prev, curr) => prev + curr, 0) / 6),
		min: Math.min(...array),
		max: Math.max(...array),
		length: array.length,
	};
};

export { capitalize, reverseString, calculator, caesar, analyzeArray };

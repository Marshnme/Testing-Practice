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

const caesar = () => {};

const analyzeArray = () => {};

export { capitalize, reverseString, calculator, caesar, analyzeArray };

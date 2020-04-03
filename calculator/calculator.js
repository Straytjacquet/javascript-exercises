const calculator = {
	add: function add(a, b) {
		return a + b;
	},
	subtract: function subtract(a,b) {
		return a - b;
	},
	sum: function sum(array) {
		var sum = array.reduce((total, int) => {
			return total + int
		}, 0);
		return sum;
	},
	multiply: function multiply(array) {
		if (array.length > 0) {
			var multiply = array.reduce((total, int) => {
				return total * int
			});
			return multiply
		} else {
			return 0;
		}
	},
	power: function power(a, b) {
		return Math.pow(a, b)
	},
	factorial: function factorial(int) {
		return (int >= 1) ? int * factorial(int - 1) : 1
	}
}

function add(a, b) {
	return calculator.add(a, b)
};

function subtract (a, b) {
	return calculator.subtract(a, b)
};

function sum (array) {
	return calculator.sum(array)
};

function multiply (array) {
	return calculator.multiply(array)
};

function power(a, b) {
	return calculator.power(a,b)
};

function factorial(int) {
	return calculator.factorial(int)
};

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}

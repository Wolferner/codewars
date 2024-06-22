/**
 * Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.
 *
 * @param {Array<number> | string} iterable - The first number.
 * @returns {Array<number | string>} The sum of the two numbers.
 * @see {@link https://www.codewars.com/kata/54e6533c92449cc251001667/train/javascript}
 * @example
 * uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
 * uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
 * uniqueInOrder([1,2,2,3,3])       == [1,2,3]
 */

const uniqueInOrder = iterable => {
	const newArray = [];

	for (const [index, value] of [...iterable].entries()) {
		if (value !== iterable[index + 1]) {
			newArray.push(value);
		}
	}
	return newArray;
};

const result = uniqueInOrder('AAAABBBCCDAABBB');
console.log(result);
// const uniqueInOrder = iterable => {
// 	return [...iterable].filter((a, i) => a !== iterable[i + 1]);
// };

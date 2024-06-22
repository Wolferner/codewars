/**
 * Given two arrays a and b write a function comp(a, b) (orcompSame(a, b)) that checks whether the two arrays have the "same" elements, with the same multiplicities (the multiplicity of a member is the number of times it appears). "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.
 * a or b might be null and need return false
 *
 * @param {Array<number> } array1 - The first number.
 * @param {Array<number> } array2 - The first number.
 * @returns {boolean} The sum of the two numbers.
 * @see {@link https://www.codewars.com/kata/550498447451fbbd7600041c/train/javascript}
 * @example
 * a = [121, 144, 19, 161, 19, 144, 19, 11]
 * b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]
 * return true
 */
function comp(array1, array2) {
	if (!array1 || !array2) {
		return false;
	}
	if (array1.length === 0 && array2.length === 0) {
		return true;
	}

	let result;

	for (let firstValue of array1) {
		if (result === false) {
			break;
		}
		for (let [index2, secondValue] of array2.entries()) {
			if (secondValue === Math.pow(firstValue, 2)) {
				result = true;
				array2.splice(index2, 1);
				break;
			} else if (index2 === array2.length - 1) {
				result = false;
			}
		}
	}

	return result;
}

a = [121, 144, 19, 161, 19, 144, 19, 11];
b = [121, 14641, 20736, 36100, 25921, 361, 20736, 361];
const result = comp(a, b);
console.log(result);

// function comp(a, b) {
// 	if (!a || !b || a.length !== b.length) return false;
// 	return a.map(x => x * x).sort().toString() === b.sort().toString();
// }

// function comp(array1, array2) {
//   if (array1 == null || array2 == null) return false;
//   array1.sort((a, b) => a - b);
//   array2.sort((a, b) => a - b);
//   return array1.every((item, index) => item * item == array2[index]);
// }

/**
 * @module Simple_Encryption_#1-Alternating_Split
 * @description Implement a pseudo-encryption algorithm which given a string S and an integer N concatenates all the odd-indexed characters of S with all the even-indexed characters of S, this process should be repeated N times.
 * Together with the encryption function, you should also implement a decryption function which reverses the process.If the string S is an empty value or the integer N is not positive, return the first argument without changes.
 * @see {@link https://www.codewars.com/kata/57814d79a56c88e3e0000786/train/javascript}
 */

/**
 * Encrypting func
 *
 * @function encrypt
 * @param {string} text Text.
 * @param {number} n Value of encrypting times.
 * @returns {string} Encrypted value
 * @example
 * encrypt("012345", 1)  =>  "135024"
 * encrypt("012345", 2)  =>  "135024"  ->  "304152"
 * encrypt("012345", 3)  =>  "135024"  ->  "304152"  ->  "012345"
 */
function encrypt(text, n) {
	if (!text || n < 1) return text;

	let encryptedString = text;
	let odd = '';
	let even = '';

	for (let i = 0; i !== n + 1; i++) {
		if (!!odd && !!even) {
			encryptedString = odd + even;
		}
		odd = '';
		even = '';
		for (const [index, value] of [...encryptedString].entries()) {
			if (index % 2 === 0) {
				even = even + value;
			} else {
				odd = odd + value;
			}
		}
	}

	return encryptedString;
}

const result = encrypt('0123456', 1);
console.log(result);

/**
 * Decrypting func
 *
 * @function decrypt
 * @param {string} encryptedText Text.
 * @param {number} n Value of encrypting times.
 * @returns {number} Decrypted value.
 */
function decrypt(encryptedText, n) {
	if (!encryptedText || n < 1) return encryptedText;

	const length = encryptedText.length;
	let mid;
	let text = '';
	let odd;
	let even;
	if (length % 2 !== 0) {
		mid = Math.floor(length / 2);
		odd = encryptedText.slice(0, mid);
		even = encryptedText.slice(mid);
	} else {
		mid = length / 2;
		odd = encryptedText.slice(0, mid);
		even = encryptedText.slice(mid);
	}

	for (let i = 0; i !== n; i++) {
		if (!!text) {
			odd = text.slice(0, mid);
			even = text.slice(mid);
		}
		text = '';

		for (const [index, value] of [...even].entries()) {
			text = text + value;
			if (odd[index]) {
				text = text + odd[index];
			}
		}
	}

	return text;
}

const result2 = decrypt('hskt svr neetn!Ti aai eyitrsig', 1);
console.log(result2);

// BestPractice

// function encrypt(text, n) {
//   console.log(text, n);
//   if (!text || n <= 0) return text;
//   while (n--) {
//     let ans = '';
//     for (let i = 1; i < text.length; i += 2) {
//       ans += text[i];
//     }
//     for (let i = 0; i < text.length; i += 2) {
//       ans += text[i];
//     }
//     text = ans;
//   }
//   return text;
// }

// function decrypt(encryptedText, n) {
//   if (!encryptedText || n <= 0) return encryptedText;
//   const ans = new Array(encryptedText.length);
//   while (n--) {
//     let j = 0;
//     for (let i = 1; i < ans.length; i += 2) {
//       ans[i] = encryptedText[j++];
//     }
//     for (let i = 0; i < ans.length; i += 2) {
//       ans[i] = encryptedText[j++];
//     }
//     encryptedText = ans.join('');
//   }
//   return encryptedText;
// }

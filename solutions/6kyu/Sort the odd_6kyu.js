function sortArray(array) {
  const oddNumber = [];
  for (let value of array) {
    if (value % 2 !== 0) {
      oddNumber.push(value);
    }
  }
  const sortedOddNumber = oddNumber.sort((a, b) => a - b);
  for (let i = 0, j = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) {
      array[i] = sortedOddNumber[j];
      j++;
    }
  }
  return array;
}

// function sortArray(array) {
//   const odd = array.filter((x) => x % 2).sort((a,b) => a - b);
//   return array.map((x) => x % 2 ? odd.shift() : x);
// }

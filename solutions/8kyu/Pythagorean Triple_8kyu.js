function isPythagoreanTriple(integers) {
  let c = 0;
  for (let value of integers) {
    if (value > c) {
      c = value;
    }
  }
  const [a, b] = integers.filter((item) => item !== c);
  return a ** 2 + b ** 2 === c ** 2;
}

// function isPythagoreanTriple(integers) {
//   let newArray = integers.sort((a, b) => a - b);
//   return newArray[0] ** 2 + newArray[1] ** 2 == newArray[2] ** 2;
// }

isPythagoreanTriple([1, 2, 4]);

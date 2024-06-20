function solution(number) {
  let romeNumbers = ""; //?
  const numerals = [
    { value: 1000, number: "M" },
    { value: 900, number: "CM" },
    { value: 500, number: "D" },
    { value: 400, number: "CD" },
    { value: 100, number: "C" },
    { value: 90, number: "XC" },
    { value: 50, number: "L" },
    { value: 40, number: "XL" },
    { value: 10, number: "X" },
    { value: 9, number: "IX" },
    { value: 5, number: "V" },
    { value: 4, number: "IV" },
    { value: 1, number: "I" },
  ];

  for (let i = 0; i < numerals.length; i++) {
    while (number >= numerals[i].value) {
      romeNumbers += numerals[i].number;
      number -= numerals[i].value;
    }
  }
  return romeNumbers;
}

// function solution(number) {
//   var roman = {
//     M: 1000,
//     CM: 900,
//     D: 500,
//     CD: 400,
//     C: 100,
//     XC: 90,
//     L: 50,
//     XL: 40,
//     X: 10,
//     IX: 9,
//     V: 5,
//     IV: 4,
//     I: 1,
//   };

//   var ans = "";
//   while (number > 0) {
//     for (a in roman) {
//       if (roman[a] <= number) {
//         ans += a;
//         number -= roman[a];
//         break;
//       }
//     }
//   }
//   return ans;
// }

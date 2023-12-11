function solution(str) {
  let newArray = [];
  for (let i = 0; i < str.trim().length; i = i + 2) {
    if (str[i + 1] === undefined) {
      const lastArr = str[i] + "_";
      newArray.push(lastArr);
    } else {
      newArray.push(str.trim().substr(i, 2));
    }
  }
  console.log(newArray);
  return newArray;
}

solution("abc");

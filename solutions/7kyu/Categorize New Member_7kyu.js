function openOrSenior(data) {
  const result = [];
  for (let value of data) {
    const age = value[0];
    const handicap = value[1];
    if (age >= 55 && handicap > 7) {
      result.push("Senior");
    } else {
      result.push("Open");
    }
  }
  return result;
}

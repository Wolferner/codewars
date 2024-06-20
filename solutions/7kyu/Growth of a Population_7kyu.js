function nbYear(p0, percent, aug, p) {
  let counter = 0;
  const percents = percent / 100;
  let people = p0;

  while (people <= p) {
    people = Math.floor(people + people * percents + aug);
    counter++;
  }
  return counter;
}

console.log(nbYear(1000, 2, 50, 1400));

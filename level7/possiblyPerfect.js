function possiblyPerfect(key, answers) {
  console.log(key, answers);
  let count = 0;
  let arr = [];

  let falseCount = 0;
  let falseArr = [];

  if (key.length === answers.length) {
    for (let i = 0; i < key.length; i++) {
      if (key[i] !== "_") {
        arr.push(key[i]);
      }
      if (key[i] !== "_" && key[i] === answers[i]) {
        console.log(answers[i]);
        count += 1;
      }
    }
    for (let i = 0; i < key.length; i++) {
      if (key[i] !== "_") {
        falseArr.push(key[i]);
      }
      if (key[i] !== "_" && key[i] !== answers[i]) {
        console.log(answers[i]);
        falseCount += 1;
      }
    }
  }
  console.log(count, arr.length);
  console.log(falseCount, falseArr.length);
  console.log(!!(arr.length === count || falseArr.length === falseCount));
  return !!(arr.length === count || falseArr.length === falseCount);
}

possiblyPerfect(["A", "_", "C", "_", "B"], ["A", "D", "C", "E", "B"]);
possiblyPerfect(["B", "_", "B"], ["B", "D", "C"]);

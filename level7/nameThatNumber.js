function nameThatNumber(num) {
  let singles = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  let doubles = [
    "ten",
    "twenty",
    "thirty",
    "forty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninety",
  ];

  if (num < 10) {
    return singles[num];
  }
  if (num == 10) {
    return "ten";
  }
  if (num == 11) {
    return "eleven";
  }
  if (num == 12) {
    return "twelve";
  }
  if (num == 13) {
    return "thirteen";
  }
  if (num == 15) {
    return "fifteen";
  }
  if (num == 18) {
    return "eighteen";
  }
  if (num == 20) {
    return "twenty";
  }
  if (num == 30) {
    return "thirty";
  }
  if (num == 40) {
    return "forty";
  }
  if (num == 50) {
    return "fifty";
  }
  if (num == 60) {
    return "sixty";
  }
  if (num == 70) {
    return "seventy";
  }
  if (num == 80) {
    return "eighty";
  }
  if (num == 90) {
    return "ninety";
  }
  if (
    parseInt(num.toString()[0]) === 1 &&
    num != 11 &&
    num != 12 &&
    num != 13 &&
    num != 15
  ) {
    return singles[parseInt(num.toString()[1])] + "teen";
  }
  if (num >= 21 && num <= 29) {
    return doubles[1] + " " + singles[parseInt(num.toString()[1])];
  }
  if (num >= 31 && num <= 39) {
    return doubles[2] + " " + singles[parseInt(num.toString()[1])];
  }
  if (num >= 41 && num <= 49) {
    return doubles[3] + " " + singles[parseInt(num.toString()[1])];
  }
  if (num >= 51 && num <= 59) {
    return doubles[4] + " " + singles[parseInt(num.toString()[1])];
  }
  if (num >= 61 && num <= 69) {
    return doubles[5] + " " + singles[parseInt(num.toString()[1])];
  }
  if (num >= 71 && num <= 79) {
    return doubles[6] + " " + singles[parseInt(num.toString()[1])];
  }
  if (num >= 81 && num <= 89) {
    return doubles[7] + " " + singles[parseInt(num.toString()[1])];
  }
  if (num >= 91 && num <= 99) {
    return doubles[8] + " " + singles[parseInt(num.toString()[1])];
  }
}

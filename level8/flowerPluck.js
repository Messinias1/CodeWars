function howMuchILoveYou(n) {
  let saying = [
    "I love you",
    "a little",
    "a lot",
    "passionately",
    "madly",
    "not at all",
  ];
  let j = 0;

  for (let i = 0; i < n; i++) {
    if (j >= saying.length) {
      j = 0;
    }
    j++;
  }
  return saying[j - 1];
}

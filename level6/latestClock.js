function latestClock(a, b, c, d) {
  let digits = [];
  digits.push(a, b, c, d);
  // Sort the digits in ascending order
  digits.sort((a, b) => a - b);

  for (let h1 = 2; h1 >= 0; h1--) {
    if (digits.includes(h1)) {
      let digitsCopy = digits.slice();
      digitsCopy.splice(digitsCopy.indexOf(h1), 1);

      for (let h2 = 9; h2 >= 0; h2--) {
        if (digitsCopy.includes(h2) && (h1 !== 2 || h2 < 4)) {
          let digitsCopy2 = digitsCopy.slice();
          digitsCopy2.splice(digitsCopy2.indexOf(h2), 1);

          for (let m1 = 5; m1 >= 0; m1--) {
            if (digitsCopy2.includes(m1)) {
              let digitsCopy3 = digitsCopy2.slice();
              digitsCopy3.splice(digitsCopy3.indexOf(m1), 1);

              let m2 = digitsCopy3[0];
              return `${h1}${h2}:${m1}${m2}`;
            }
          }
        }
      }
    }
  }

  return null;
}

latestClock(9, 1, 2, 5);
latestClock(1, 2, 8, 9);
//latestClock(2, 4, 0, 0);

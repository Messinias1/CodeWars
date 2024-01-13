function swapAdjacentBits(n) {
  if (n == 1) {
    return 2;
  }
  let binary = n.toString(2).split("");
  console.log(binary);
  let binary2 = [];

  while (
    (binary.length > 0 && binary.length < 4) ||
    (binary.length > 4 && binary.length < 8) ||
    (binary.length > 8 && binary.length < 16) ||
    (binary.length > 16 && binary.length < 24) ||
    (binary.length > 24 && binary.length < 32)
  ) {
    binary.unshift("0");
  }
  console.log(binary);
  for (let i = 0; i < binary.length; i += 2) {
    if (i + 1 < binary.length) {
      [binary[i], binary[i + 1]] = [binary[i + 1], binary[i]];
    }
  }

  console.log(binary.join(""));
  let digit = parseInt(binary.join(""), 2);
  console.log(digit);
  return digit;
}

function esrever(str) {
  if (str === "") {
    return "";
  }

  let reversedLetters = str.split("").reverse().join("");
  let punctuation = reversedLetters[0];
  let newStr = reversedLetters.slice(1);
  console.log(newStr);

  console.log(newStr.padEnd(newStr.length + 1, punctuation));

  return newStr.padEnd(newStr.length + 1, punctuation);
}

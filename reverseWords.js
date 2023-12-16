function reverseWords(str) {
  let reversedWords = str.split("").reverse().join("");
  let reversed = reversedWords.split(" ");
  let arr = [];

  for (let i = reversed.length - 1; i >= 0; i--) {
    arr.push(reversed[i]);
  }
  console.log(arr.join(" "));
  return arr.join(" ");
}

reverseWords("dog. lazy the over jumps fox brown quick The");

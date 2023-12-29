function disemvowel(str) {
  let newStr = str.replace(/[aeiouAEIOU]/g, "");
  console.log(newStr);
  return newStr;
}

disemvowel("This website is for losers LOL!");

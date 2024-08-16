function isPalindrome(s) {
  let newStr = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  let reversed = s
    .split("")
    .reverse()
    .join("")
    .toLowerCase()
    .replace(/[^a-zA-Z0-9]/g, "");

  return newStr === reversed;
}

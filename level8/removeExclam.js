function remove(str) {
  let newStr = str.split("");
  console.log(newStr[newStr.length - 1]);

  if (newStr[newStr.length - 1] === "!") {
    console.log(true);
    newStr.pop();
  }
  console.log(newStr.join(""));
  return newStr.join("");
}

remove("!Hi!");

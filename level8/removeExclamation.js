function remove(string) {
  //   if(string.contains("!"))
  let str = string.replaceAll("!", "");
  console.log(str + "!");
  return str + "!";
}

remove("Hi!!!!");

function count(string) {
  if (string.length == 0) {
    return {};
  }
  let arr = string.split("");
  let obj = {};

  for (const element of arr) {
    obj[element] = arr.filter((v) => v === element).length;
  }
  console.log(obj);
  return obj;
}

count("ABCC");

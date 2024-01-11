function calc(x) {
  let arr = [];
  let total1 = 0;
  let total2 = 0;

  for (let i = 0; i < x.length; i++) {
    arr.push(x.charCodeAt(i).toString());
  }
  let str1 = arr.join("");
  for (const element of str1) {
    total1 += Number(element);
  }
  let str2 = str1.replace(/7/g, "1");
  for (const element of str2) {
    total2 += Number(element);
  }
  return total1 - total2;
}

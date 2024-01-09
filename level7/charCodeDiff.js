function calc(x) {
  let arr = [];
  let total1 = 0;
  let total2 = 0;

  for (let i = 0; i < x.length; i++) {
    arr.push(x.charCodeAt(i).toString());
  }
  let str1 = arr.join("");
  for (let i = 0; i < str1.length; i++) {
    total1 += Number(str1[i]);
  }
  let str2 = str1.replace(/7/g, "1");
  for (let i = 0; i < str2.length; i++) {
    total2 += Number(str2[i]);
  }
  return total1 - total2;
}

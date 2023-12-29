function descendingOrder(n) {
  let strNum = n.toString();
  let strArr = [];
  let numArr = [];

  for (const element of strNum) {
    strArr.push(element);
  }
  console.log(strArr);

  for (const element of strArr) {
    let convert = Number(element);
    numArr.push(convert);
  }
  let order = numArr.sort().reverse().toString().split(",").join("");
  console.log(order);
  return Number(order);
}

descendingOrder(145263);

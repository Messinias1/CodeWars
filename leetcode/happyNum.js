/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  let num = 0;
  console.log(n.toString().split(""));
  let nStr = n.toString().split("");
  let nIntArr = [];

  for (let i = 0; i < nStr.length; i++) {
    nIntArr.push(Number(nStr[i]));
  }

  console.log(nIntArr);

  for (let i = 0; i < nIntArr.length; i++) {
    num += Math.pow(nIntArr[i], 2);
    console.log(num);
    console.log(i);
    if (i === nIntArr.length - 1 && num !== 1) {
      i = 0;
      nIntArr.length = 0;
      nIntArr.push(num);
      num = 0;
      i++;
    }
  }
  console.log("Num", num);
  console.log(nIntArr % 10);
};

isHappy(19);

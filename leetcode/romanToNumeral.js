/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  let total = 0;
  let arr = [];

  let CM = "CM";
  let CD = "CD";
  let XC = "XC";
  let XL = "XL";
  let IX = "IX";
  let IV = "IV";

  let sWithoutCM = "";
  let sWithoutCD = "";
  let sWithoutXC = "";
  let sWithoutXL = "";
  let sWithoutIX = "";
  let sWithoutIV = "";

  if (s.includes("CM")) {
    sWithoutCM = s.replace(CM, "");
    arr.push(sWithoutCM);
    total += 900;
  } else {
    sWithoutCM = s;
  }

  console.log(arr);
  if (sWithoutCM.includes("CD")) {
    sWithoutCD = sWithoutCM.replace(CD, "");
    arr.pop();
    arr.push(sWithoutCD);
    total += 400;
  } else {
    sWithoutCD = arr[0];
  }

  console.log("toruble arr", arr);
  if (sWithoutCD.includes("XC")) {
    sWithoutXC = sWithoutCD.replace(XC, "");
    arr.pop();
    arr.push(sWithoutXC);
    total += 90;
  } else {
    sWithoutXC = arr[0];
  }

  console.log(arr);
  if (sWithoutXC.includes("XL")) {
    sWithoutXL = sWithoutXC.replace(XL, "");
    arr.pop();
    arr.push(sWithoutXL);
    total += 40;
  } else {
    sWithoutXL = arr[0];
  }

  console.log(arr);
  if (sWithoutXL.includes("IX")) {
    sWithoutIX = sWithoutXL.replace(IX, "");
    arr.pop();
    arr.push(sWithoutIX);
    total += 9;
  } else {
    sWithoutIX = arr[0];
  }

  console.log(arr);
  if (sWithoutIX.includes("IV")) {
    sWithoutIV = sWithoutIX.replace(IV, "");
    arr.pop();
    arr.push(sWithoutIV);
    total += 4;
  } else {
    sWithoutIV = arr[0];
  }

  console.log(arr);
  console.log(total);

  let arr2 = arr[0].split("");
  console.log(arr2);

  for (let i = 0; i < arr2.length; i++) {
    if (arr[i] === "M") {
      total += 1000;
    } else if (arr[i] === "D") {
      total += 500;
    } else if (arr[i] === "C") {
      total += 100;
    } else if (arr[i] === "L") {
      total += 50;
    } else if (arr[i] === "X") {
      total += 10;
    } else if (arr[i] === "V") {
      total += 5;
    } else if (arr[i] === "I") {
      total += 1;
    }
  }
  console.log(total);
  return total;
};

romanToInt("MMMDCCXXIV");

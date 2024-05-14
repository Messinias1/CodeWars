/**
 * @param {string} s
 * @return {number}
 */
let romanToInt = function (s) {
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

  console.log(s);
  console.log(arr);

  if (s.includes("CM")) {
    sWithoutCM = s.replace(CM, "");
    arr.push(sWithoutCM);
    total += 900;
  } else {
    sWithoutCM = s;
  }

  console.log(arr);

  if (sWithoutCM === undefined) {
    sWithoutCM += s;
  }
  if (sWithoutCM.includes("CD")) {
    sWithoutCD = sWithoutCM.replace(CD, "");
    arr.pop();
    arr.push(sWithoutCD);
    total += 400;
  } else if (arr[0] === undefined) {
    sWithoutCD = s;
  } else {
    sWithoutCD = arr[0];
  }

  console.log(arr);

  if (sWithoutCD === undefined) {
    sWithoutCD += s;
  }
  if (sWithoutCD.includes("XC")) {
    sWithoutXC = sWithoutCD.replace(XC, "");
    arr.pop();
    arr.push(sWithoutXC);
    total += 90;
  } else if (arr[0] === undefined) {
    sWithoutXC = s;
  } else {
    sWithoutXC = arr[0];
  }

  console.log(arr);

  if (sWithoutXC === undefined) {
    sWithoutXC += s;
  }
  if (sWithoutXC !== "" && sWithoutXC.includes("XL")) {
    sWithoutXL = sWithoutXC.replace(XL, "");
    arr.pop();
    arr.push(sWithoutXL);
    total += 40;
  } else if (arr[0] === undefined) {
    sWithoutXL = s;
  } else {
    sWithoutXL = arr[0];
  }

  console.log(arr);
  console.log(sWithoutXL);

  if (sWithoutXL === undefined) {
    sWithoutXL += s;
  }
  if (sWithoutXL !== "" && sWithoutXL.includes("IX")) {
    sWithoutIX = sWithoutXL.replace(IX, "");
    arr.pop();
    arr.push(sWithoutIX);
    total += 9;
  } else if (arr[0] === undefined) {
    sWithoutIX = s;
  } else {
    sWithoutIX = arr[0];
  }

  console.log(arr);

  if (sWithoutIX === undefined) {
    sWithoutIX += s;
  }
  if (sWithoutIX !== "" && sWithoutIX.includes("IV")) {
    sWithoutIV = sWithoutIX.replace(IV, "");
    arr.pop();
    arr.push(sWithoutIV);
    total += 4;
  } else if (arr[0] === undefined) {
    sWithoutIV = s;
  } else {
    sWithoutIV = arr[0];
  }

  console.log("final arr", arr);
  console.log("Total before loop", total);
  let arr2 = [];

  if (arr.length === 0) {
    arr[0] = s;
  }

  if (arr[0] !== undefined) {
    arr2 = arr[0].split("");
    console.log("split arr", arr2);
  }
  for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] === "M") {
      total += 1000;
    } else if (arr2[i] === "D") {
      total += 500;
    } else if (arr2[i] === "C") {
      total += 100;
    } else if (arr2[i] === "L") {
      total += 50;
    } else if (arr2[i] === "X") {
      total += 10;
    } else if (arr2[i] === "V") {
      total += 5;
    } else if (arr2[i] === "I") {
      total += 1;
    }
  }

  console.log("Total", total);
  return total;
};

romanToInt("MMCCCXCIX");

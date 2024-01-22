function rainTacos(landscape) {
  if (landscape === "") {
    return "";
  }
  let tempArr = [];
  let strArr = [];
  let taco = "TACO";
  let testStr = "";
  console.log(landscape);

  for (let i = 0; i < landscape.length; i++) {
    for (let j = 0; j < landscape[i].length; j++) {
      tempArr.push(landscape[i][j]);
      if (landscape[i][j] == "\n") {
        strArr.push(tempArr);
        tempArr = [];
      }
    }
  }
  strArr.push(tempArr);

  let lastElLength = strArr[strArr.length - 1].length;
  console.log(strArr);

  let j = 0;
  for (let i = 0; i < lastElLength; i++) {
    if (j >= taco.length) {
      j = 0;
    }
    testStr += taco[j];
    j++;
  }

  //let reversed = strArr.reverse();
  console.log(testStr);
  // console.log(reversed);

  for (let i = 0; i < strArr.length; i++) {
    for (let j = 0; j < strArr[i].length; j++) {
      if (
        i + 1 < strArr.length &&
        strArr[i][j] === " " &&
        strArr[i][j] != "\n" &&
        strArr[i + 1][j] != " "
      ) {
        strArr[i][j] = testStr[j];
      }
    }
  }
  console.log(strArr);
  let stringResult = strArr.map((innerArray) => innerArray.join("")).join("");
  console.log(stringResult);
  return stringResult;
}
rainTacos("          \n    ==    \n          \n          \n          ");
// https://www.codewars.com/kata/64f4ef596f222e004b877272/train/javascript

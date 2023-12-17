function solution(str) {
  if (str.length === 0) {
    return [];
  }
  //   let arr = str.match(/.{1,2}/g);
  //   console.log(str.match(/.{1,2}/g));
  //   console.log(arr[arr.length - 1].length);
  //   if (arr[arr.length - 1].length === 1) {
  //     arr[arr.length - 1] += "_";
  //   }
  let arr = [];

  if (str.length % 2 !== 0) {
    str = str + "_";
  }

  for (let i = 0; i < str.length; i += 2) {
    arr.push(str[i] + str[i + 1]);
  }

  console.log(arr);
  return arr;
}

solution("abcdefg");

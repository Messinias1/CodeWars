function discoverOriginalPrice(discountedPrice, salePercentage) {
  let answer = discountedPrice / (1 - salePercentage / 100);
  if (answer % 1 != 0) {
    console.log(answer);
    let dec = answer.toFixed(2);
    console.log(dec);
    let answerStr = dec.toString();
    if (answerStr.slice(-3) !== ".00") {
      return Number(dec);
    }

    if (answerStr.slice(-3) === ".00") {
      answerStr = answerStr.substring(0, answerStr.length - 3);
      console.log(Number(answerStr));
      return Number(answerStr);
    } else {
      console.log(Math.round(answer).toFixed(2));
      return Math.round(answer).toFixed(2);
    }
  }
  console.log(answer);
  return answer;
}

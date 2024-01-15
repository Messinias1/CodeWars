function isItANum(str) {
  let phoneNum = "";

  for (const el of str) {
    if (!isNaN(parseInt(el))) {
      phoneNum += el;
    }
  }

  if (phoneNum.startsWith("0") && phoneNum.length === 11) {
    return phoneNum;
  } else {
    return "Not a phone number";
  }
}

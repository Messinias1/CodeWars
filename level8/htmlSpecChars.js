function htmlspecialchars(formData) {
  let str = formData;
  const ampStr = str.replace(/&/g, "&amp;");
  const ltStr = ampStr.replace(/</g, "&lt;");
  const gtStr = ltStr.replace(/>/g, "&gt;");
  const quotStr = gtStr.replace(/"/g, "&quot;");

  console.log(quotStr);
  return quotStr;
}

htmlspecialchars("&lt;h2>Hello World</h2>");

function htmlspecialchars(formData) {
  let str = formData;
  const ltStr = str.replace(/</g, "&lt;");
  const gtStr = ltStr.replace(/>/g, "&gt;");
  const quotStr = gtStr.replace(/</g, "&quot;");
  const ampStr = quotStr.replace(/</g, "&amp;");
  console.log(ampStr);
  return ampStr;
}

htmlspecialchars("<h2>Hello World</h2>");

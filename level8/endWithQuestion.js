function ensureQuestion(s) {
  if (s.slice(-1) === "?") {
    return s;
  }
  console.log(s.slice(-1));
  return s + "?";
}

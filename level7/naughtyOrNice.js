function whatListAmIOn(actions) {
  console.log(actions);
  let badActions = 0;
  let goodActions = 0;

  for (let i = 0; i < actions.length; i++) {
    if (
      actions[i].startsWith("b") ||
      actions[i].startsWith("f") ||
      actions[i].startsWith("k")
    ) {
      badActions++;
    } else if (
      actions[i].startsWith("g") ||
      actions[i].startsWith("s") ||
      actions[i].startsWith("n")
    ) {
      goodActions++;
    }
  }
  if (badActions >= goodActions) {
    return "naughty";
  }
  return "nice";
}

function baseFinder(seq) {
  let str = seq.join("");
  let newSeq = [];

  for (const el of str) {
    newSeq.push(el);
  }

  let outputArray = newSeq.filter(function (v, i, self) {
    return i == self.indexOf(v);
  });
  return outputArray.length;
}

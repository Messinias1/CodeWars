function firstNonRepeated(s) {
  const arr = s.split("");
  for (const element of arr) {
    if (arr.filter((v) => v === element).length < 2) {
      console.log(element);
      return element;
    }
  }
  return null;
}

firstNonRepeated("test");

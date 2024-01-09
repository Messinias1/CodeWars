function seaSick(x) {
  let threshold = x.length * 0.2;
  console.log(threshold);
  let count = 0;
  for (let i = 0; i < x.length; i++) {
    if (i + 1 < x.length && x[i] != x[i + 1]) {
      count += 1;
    }
    console.log(x[i]);
  }
  console.log(count);
  if (count > threshold) {
    return "Throw Up";
  }
  return "No Problem";
}

seaSick("_~~~~~~~_~__~______~~__~~_~~");

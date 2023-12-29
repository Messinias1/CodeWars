function add(n) {
  function add_another(x) {
    return x + n;
  }
  return add_another;
}

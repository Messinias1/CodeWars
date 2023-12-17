function validateUsr(username) {
  let res = new RegExp("^[a-z0-9_]{4,16}$");
  let validation = res.test(username);
  console.log(validation);
  return validation;
}

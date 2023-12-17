function hello(name) {
  if (name == "" || name == undefined) {
    return "Hello, World!";
  } else {
    name = name[0].toUpperCase() + name.slice(1).toLowerCase();
    console.log("Hello, " + name + "!");
    return "Hello, " + name + "!";
  }
}

hello("cArl");

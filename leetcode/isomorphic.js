/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }

  let keys = s.split("");
  let values = t.split("");
  let obj = {};
  let obj2 = {};
  let processedSet = new Set();
  let processedSet2 = new Set();

  keys.forEach((key, index) => {
    if (!(key in obj)) {
      obj[key] = values[index]; // Add the key-value pair to the object only if it doesn't exist
    }
  });

  values.forEach((value, index) => {
    if (!(value in obj2)) {
      obj2[value] = keys[index]; // Add the key-value pair to the object only if it doesn't exist
    }
  });

  for (let i = 0; i < keys.length; i++) {
    if (processedSet.has(keys[i])) {
      if (values[i] !== obj[keys[i]]) {
        return false;
      }
    }
    processedSet.add(keys[i]);
  }

  for (let i = 0; i < values.length; i++) {
    if (processedSet2.has(values[i])) {
      if (keys[i] !== obj2[values[i]]) {
        return false;
      }
    }
    processedSet2.add(values[i]);
  }
  return true;
};

/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
  let patternArr = pattern.split("");
  let sArr = s.split(" ");
  let obj = {};

  if (patternArr.length !== sArr.length) {
    return false;
  }

  patternArr.forEach((key, index) => {
    if (!(key in obj)) {
      obj[key] = sArr[index]; // Add the key-value pair to the object only if it doesn't exist
    }
  });

  const valueCounts = {};

  for (const key in obj) {
    const value = obj[key];
    if (valueCounts[value]) {
      valueCounts[value]++;
    } else {
      valueCounts[value] = 1;
    }
  }

  for (const count in valueCounts) {
    if (valueCounts[count] > 1) {
      return false;
    }
  }

  for (let i = 0; i < patternArr.length; i++) {
    if (obj.hasOwnProperty(patternArr[i]) && sArr[i] !== obj[patternArr[i]]) {
      return false;
    }
  }
  return true;
};

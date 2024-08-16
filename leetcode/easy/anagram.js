/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  let sortedSArr = s.split("").sort();
  let sortedTArr = t.split("").sort();

  return sortedSArr.join("") === sortedTArr.join("");
};

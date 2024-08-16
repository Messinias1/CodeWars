function groupAnagrams(strs) {
  const map = new Map();

  for (let str of strs) {
    // Sort the string to get the key
    const key = str.split("").sort().join("");

    // If the key doesn't exist in the map, create an empty array
    if (!map.has(key)) {
      map.set(key, []);
    }

    // Push the original string into the corresponding group
    map.get(key).push(str);
  }

  // Return the grouped anagrams as an array of arrays
  return Array.from(map.values());
}

function countOccurrences(parent, sub) {
  // Convert both strings to lowercase to disregard case
  parent = parent.toLowerCase();
  sub = sub.toLowerCase();

  // Initialize the count and position
  let count = 0;
  let pos = parent.indexOf(sub);

  // Loop to find all occurrences of sub in parent
  while (pos !== -1) {
    count++;
    pos = parent.indexOf(sub, pos + 1);
  }

  return count;
}

// Example usage
const parent = "TimisplayinginthehouseofTimwiththeTim";
const sub = "Tim";
const result = countOccurrences(parent, sub);
console.log(result); // Output should be 3

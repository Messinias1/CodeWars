function main(input) {
  // Define the vowels that need to be removed
  const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

  // Split the input into an array of characters
  let inputArray = input.split("");

  // Filter out the vowels from the input array
  let resultArray = inputArray.filter((char) => !vowels.includes(char));

  // Join the array back into a string
  let result = resultArray.join("");

  // Output the result
  console.log(result);
}

main("haveaniceday");

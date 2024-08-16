function isValid(s) {
  let stack = [];
  let map = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  for (let i = 0; i < s.length; i++) {
    if (map[s[i]]) {
      let topElement;

      if (stack.length > 0) {
        topElement = stack.pop();
      } else {
        topElement = "#";
      }

      if (topElement !== map[s[i]]) {
        return false;
      }
    } else {
      stack.push(s[i]);
    }
  }

  return stack.length === 0;

  /* ARRAY SOLUTION
  let openBrackets = [];

  for (let i = 0; i < s.length; i++) {
      let char = s[i];
      
      if (char === '(' || char === '{' || char === '[') {
          // If it's an opening bracket, push it onto the array
          openBrackets.push(char);
      } else if (char === ')') {
          // If it's a closing round bracket, check for a matching opening bracket
          if (openBrackets.length === 0 || openBrackets.pop() !== '(') {
              return false;
          }
      } else if (char === '}') {
          // If it's a closing curly bracket, check for a matching opening bracket
          if (openBrackets.length === 0 || openBrackets.pop() !== '{') {
              return false;
          }
      } else if (char === ']') {
          // If it's a closing square bracket, check for a matching opening bracket
          if (openBrackets.length === 0 || openBrackets.pop() !== '[') {
              return false;
          }
      }
  }

  // If the array is empty, all brackets are properly closed
  return openBrackets.length === 0;
  */
}

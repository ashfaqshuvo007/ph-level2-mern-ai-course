// * Problem Statement

// Given a string s containing just the characters:
//?  '(', ')', '{', '}', '[' and ']'
// determine if the input string is valid.

//? An input string is valid if:
//? i. Open brackets must be closed by the same type of brackets.
//? ii. Open brackets must be closed in the correct order.
//? iii. Every close bracket has a corresponding open bracket of the same type.

//? Sample Input and Output
//? Input: s = "()"
//? Output: true

//? Input: s = "()[]{}"
//? Output: true

//? Input: s = "(]"
//? Output: false
const isValidParenthesis = (s) => {
  // Since we pop when we encounter a closing bracket, we use closing brackets
  // as keys in the map to easily check for matches.
  const bracketPairs = { ")": "(", "]": "[", "}": "{" };
  const stack = [];
  //   for (let index = 0; index < s.length; index++) {
  //     const char = s[index];
  //     if (char === "(" || char === "{" || char === "[") {
  //       stack.push(char);
  //     } else if (char === ")" || char === "}" || char === "]") {
  //       if (
  //         stack.length === 0 ||
  //         stack[stack.length - 1] !== bracketPairs[char]
  //       ) {
  //         return false;
  //       }
  //       stack.pop();
  //     }
  //   }
  for (char of s) {
    if (!(char in bracketPairs)) {
      stack.push(char);
    } else {
      if (
        stack.length === 0 ||
        stack[stack.length - 1] !== bracketPairs[char]
      ) {
        return false;
      }
      stack.pop();
    }
  }
  return stack.length === 0;
};

// Testing the function with sample inputs
console.log(isValidParenthesis("()")); // Output: true
console.log(isValidParenthesis("()[]{}")); // Output: true
console.log(isValidParenthesis("(]")); // Output: false
console.log(isValidParenthesis("([{}])")); // Output: true
console.log(isValidParenthesis("(((())))")); // Output: true
console.log(isValidParenthesis("((())")); // Output: false
console.log(isValidParenthesis("({)}")); // Output: false

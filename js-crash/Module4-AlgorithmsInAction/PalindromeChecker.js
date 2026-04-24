//* Problem - Check if a string is a valid PALINDROME

// A phrase is a palindrome if, after converting all uppercase letters
// into lowercase letters and removing all non-alphanumeric characters,
// it reads the same forward and backward. Alphanumeric characters include letters and numbers.

//? Given a string s, return true if it is a palindrome, or false otherwise.

//* Naive solution - regex and reverse - O(n) and O(n)
const isPalindromeNaive = (str) => {
  const normalized = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  const reversed = normalized.split("").reverse().join("");

  if (reversed === normalized) return true;

  return false;
};

//* Better Solution - Two Pointers method - O(n)
const isAlphanumeric = (char) => {
  const code = char.charCodeAt(0);
  return (
    (code >= 48 && code <= 57) || // 0-9
    (code >= 65 && code <= 90) || // A-Z
    (code >= 97 && code <= 122) // a-z
  );
};
//  amanaplanacanalpanama
const isPalindromeTwoPointers = (s) => {
  start = 0;
  end = s.length - 1;
  s = s.toLowerCase();
  while (start < end) {
    while (start < end && !isAlphanumeric(s[start])) start++;
    while (end > start && !isAlphanumeric(s[end])) end--;
    if (s[start] !== s[end]) {
      return false;
    }
    start++;
    end--;
  }
  return true;
};

// console.log(isAlphanumeric("A")); // true
// console.log(isAlphanumeric("!")); // false

console.log("==== Using Naive Approach ====");
console.log(isPalindromeNaive(" ")); // true, //? since removing the space, it is a palindrome
console.log(isPalindromeNaive("what a lovely day!")); // false
console.log(isPalindromeNaive("A man, a plan, a canal: Panama")); //true

console.log("==== Using Two Pointers Approach ====");
console.log(isPalindromeTwoPointers(" ")); // true, //? since removing the space, it is a palindrome
console.log(isPalindromeTwoPointers("what a lovely day!")); // false
console.log(isPalindromeTwoPointers("A man, a plan, a canal: Panama")); //true

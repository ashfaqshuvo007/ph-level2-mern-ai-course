//* The OG O(n) optimizer i.e. Binary Search - O(log n)

//* Scenario:

// If you are given an array and a target.
// Find if the target is in the array.

// e.g. arr = [3,5,6,9,11], target = 9
// Traditionally what we do is to traverse the whole array and
// Check each index for the target value. But,
// if input array size is 10^6 or even larger, we are prone to
// Time Limit Exceeded error in problem solving.

// Whereas, Binary search divides the input array into half at each
// iteration and discards one half depending on whether the target is
// greater than or less than the element at middle .
// Hence, this algorithm is much more efficent than the other.

//* Implementation

//? Binary Search:  returns true or false
const binarySearch = (arr, l, r, t) => {
  l = 0;
  r = arr.length - 1;
  while (l <= r) {
    m = Math.floor((l + r) / 2);

    if (t === arr[m]) {
      return m;
    }
    if (t > arr[m]) {
      l = m + 1;
    } else {
      r = m - 1;
    }
  }
  return -1;
};

//? Main function: returns true or false
const findTarget = (input, target) => {
  return binarySearch(input, 0, input.length - 1, target);
};

console.log(findTarget([3, 5, 6, 9, 11], 9)); // 3
console.log(findTarget([3, 5, 6, 9, 11], 98)); // -1
console.log(findTarget([3, 5, 6, 9, 11], 11)); // 4

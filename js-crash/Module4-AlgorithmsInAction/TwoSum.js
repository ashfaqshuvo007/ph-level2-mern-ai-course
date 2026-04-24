//* Problem Statement

// Given an array of integers nums and an integer target,
// return the indices i and j such that nums[i] + nums[j] == target and i != j.
// if there is no solution. return undefined

// You may assume that every input has exactly one pair of indices i and j that satisfy the condition.
// You may not use the same element twice.

// Return the answer with the smaller index first.

//? Input
// [2, 11, 7, 15] target = 9

//? Output
// [0, 2] (because 2 + 7 = 9)

//TODO: Brute Force - O(n * m)
const twoSumNaive = (inputArr, target) => {
  let res = undefined;
  //! O(n) - where n is length of given array
  for (let index = 0; index < inputArr.length; index++) {
    //! O(m) - where m is length of given array - 1
    for (let j = 1; j < inputArr.length; j++) {
      if (inputArr[index] + inputArr[j] == target) {
        res = [index, j];
      }
    }
  }
  return res;
};

console.log(twoSumNaive([2, 11, 7, 15], 9));

//TODO: Two pointers technique

const twoSumOptimal = (inputArr, target) => {
  let visited = {};

  for (let i = 0; i < inputArr.length; i++) {
    if (target - inputArr[i] in visited) {
      return [visited[target - inputArr[i]], i];
    }
    visited[inputArr[i]] = i;
  }
  return undefined;
};

console.log(twoSumOptimal([2, 11, 7, 15], 9)); // Output: [0, 2]
console.log(twoSumOptimal([2, 11, 7, 15], 10)); // undefined

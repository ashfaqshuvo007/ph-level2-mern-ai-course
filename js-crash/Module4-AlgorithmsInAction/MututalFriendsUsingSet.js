//* Problem Statement:

// Given two large list of users: usersA and usersB, both containing user objects.
// Each user object is guranteed to have a unique id and a name. Both are strings.

// The task is to write an efficient function that finds the list of users present
// in both lists (mutual friends).

//! Do not change anything in the data setup block.

// -------------- Data Setup -------------- //

const USER_COUNT = 50000;
let usersA = [];
let usersB = [];

// Generate random user data for usersA and usersB
const createRandomUser = (id) => ({
  id: `user_${id}`,
  name: `User ${id}`,
});

for (let i = 1; i <= USER_COUNT; i++) {
  usersA.push(createRandomUser(i));
  usersB.push(createRandomUser(i + USER_COUNT / 2)); // Overlap of 25,000 users
}
//? users 25000 to 50000 are mutual
// -------------- Data Setup -------------- //

// * Solution: Using brute-force approach (O(n*m) time complexity)

const countMutualFriendsBruteForce = (listA, listB) => {
  const commonUsers = [];
  const startTime = performance.now();
  listA.forEach((userA) => {
    listB.forEach((userB) => {
      if (userA.id === userB.id) {
        commonUsers.push(userA);
      }
    });
  });
  const endTime = performance.now();
  return { count: commonUsers.length, time: endTime - startTime };
};

// console.log(countMutualFriendsBruteForce(usersA, usersB));

// * Solution: Using a Set for efficient lookups (O(n + m) time complexity)

const countMutualFriendsUsingSet = (listA, listB) => {
  const commonUsers = [];
  const userIdsSet = new Set(listA.map((user) => user.id));
  const startTime = performance.now();
  listB.forEach((userB) => {
    if (userIdsSet.has(userB.id)) {
      commonUsers.push(userB);
    }
  });
  const endTime = performance.now();
  return { count: commonUsers.length, time: endTime - startTime };
};

console.log(countMutualFriendsUsingSet(usersA, usersB));

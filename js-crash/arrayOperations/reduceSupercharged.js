//* Grouping and aggregating data with reduce
// Scenario: Count every survey and group by response

//? Input
// const surveyResponses = [
//   { id: 1, response: "Yes" },
//   { id: 2, response: "No" },
//   { id: 3, response: "Yes" },
//   { id: 4, response: "Maybe" },
//   { id: 5, response: "No" },
//   { id: 6, response: "Yes" },
//   { id: 7, response: "Maybe" },
//   { id: 8, response: "Yes" },
//   { id: 9, response: "No" },
//   { id: 10, response: "Maybe" },
//   { id: 11, response: "Yes" },
//   { id: 12, response: "No" },
//   { id: 13, response: "Yes" },
//   { id: 14, response: "Maybe" },
//   { id: 15, response: "Yes" },
// ];
// //TODO: Initialize an empty object to hold the counts
// //TODO: Check if the response already exists as a key in the object
// //TODO: If it does, increment the count; if not, initialize it to 1
// //TODO: Return the final counts object
// const count = surveyResponses.reduce((acc, response) => {
//   acc[response.response] = (acc[response.response] || 0) + 1;
//   return acc;
// }, {});

// console.log(count);
// //? Output
// // {  Yes: 7,
// //    No: 5,
// //    Maybe: 3
// // }

//* Another scenario with real example

// Scenario: You have a flat array of user data, and you need to group users by sex
// Calculating the total amount spent and the number of sales for each user in the last 30 days
// Overall, check who are the top 3 spenders and how much they spent in total
// And if they are eligible for a special discount.
const sales = [
  { userId: 1, name: "Alice", sex: "female", amount: 120 },
  { userId: 2, name: "Bob", sex: "male", amount: 75 },
  { userId: 3, name: "Charlie", sex: "male", amount: 200 },
  { userId: 4, name: "Diana", sex: "female", amount: 90 },
  { userId: 5, name: "Ethan", sex: "male", amount: 40 },

  { userId: 1, name: "Alice", sex: "female", amount: 80 },
  { userId: 2, name: "Bob", sex: "male", amount: 50 },
  { userId: 3, name: "Charlie", sex: "male", amount: 150 },
  { userId: 4, name: "Diana", sex: "female", amount: 60 },
  { userId: 5, name: "Ethan", sex: "male", amount: 60 },

  { userId: 1, name: "Alice", sex: "female", amount: 200 },
  { userId: 2, name: "Bob", sex: "male", amount: 25 },
  { userId: 3, name: "Charlie", sex: "male", amount: 300 },
  { userId: 4, name: "Diana", sex: "female", amount: 110 },
  { userId: 5, name: "Ethan", sex: "male", amount: 100 },

  { userId: 1, name: "Alice", sex: "female", amount: 50 },
  { userId: 2, name: "Bob", sex: "male", amount: 125 },
  { userId: 3, name: "Charlie", sex: "male", amount: 75 },
  { userId: 4, name: "Diana", sex: "female", amount: 40 },
  { userId: 5, name: "Ethan", sex: "male", amount: 90 },
];

//TODO: Group users by name and calculate total amount spent and number of sales
const userStats = sales.reduce((acc, sale) => {
  if (!acc[sale.name]) {
    acc[sale.name] = { totalAmount: 0, salesCount: 0 };
  }
  acc[sale.name].totalAmount += sale.amount;
  acc[sale.name].salesCount += 1;
  return acc;
}, {});
console.log(userStats);

const topSpenders = Object.entries(userStats)
  .sort((a, b) => b[1].totalAmount - a[1].totalAmount)
  .map(([name, stats]) => ({ name, totalAmount: stats.totalAmount }))
  .slice(0, 3);
console.log("Top Spenders:", topSpenders);

const discountEligibility = topSpenders.map((spender) => ({
  name: spender.name,
  totalAmount: spender.totalAmount,
  eligibleForDiscount: spender.totalAmount > 500,
}));
console.log("Discount Eligibility:", discountEligibility);

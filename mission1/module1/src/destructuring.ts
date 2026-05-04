//* Destructuring in TS

//? Object Destructuring
const userInfo = {
  name: {
    firstName: "Ashfaq",
    middleName: "Hussain",
    lastName: "Ahmed",
  },
  age: 35,
  maritalStatus: "Married",
};

// Without destructuring
const firstName = userInfo.name.firstName; // for cascading access
const status = userInfo.maritalStatus;
console.log(firstName, status);

// with destructuring
const {
  age,
  name: { firstName: fName },
} = userInfo;

console.log(age, fName);

//? Array Destructuring
const groceries = ["Milk", "Bread", "Eggs"];

// Without destructuring
console.log(groceries[0]);
console.log(groceries[1]);

// With Destrtucturing
const [milk, , eggs] = groceries; // Skipping element with empty space

console.log(milk);

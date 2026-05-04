//* Type Aliasing
type User = {
  name: {
    firstName: string;
    middleName: string;
    lastName: string;
  };
  age: number;
  maritalStatus: "Married" | "Single";
  contactNo: number;
};

// Now if we want to create another user with the same structure, we repeat the same code again

// But we with type aliasing, we can just create a type userinfo and resuse it.

const user1: User = {
  name: {
    firstName: "Ashfaq",
    middleName: "Hussain",
    lastName: "Ahmed",
  },
  age: 35,
  maritalStatus: "Married",
  contactNo: 145454645,
};

//? Another example

type IsAdmin = true;
const isAdmin: IsAdmin = true;

// Function type aliasisng
type addFunction = (a: number, b: number) => number;
const add: addFunction = (a, b) => {
  return a + b;
};

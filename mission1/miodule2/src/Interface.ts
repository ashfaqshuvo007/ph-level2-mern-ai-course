//* Type
type User = {
  name: string;
  age: number;
};

type Role = {
  role: string;
};

type UserWithRole = User & Role;

const user1: UserWithRole = {
  name: "Ashfaq",
  age: 30,
  role: "Admin",
};

const user2: UserWithRole = {
  name: "Shamim",
  age: 55,
  role: "User",
};

//* Interface - we expand on the existing type
//* Object type data structures only: Array, Object, Function
interface IUser {
  name: string;
  age: number;
}

interface IRole {
  role: string;
}

// const user3: IUser = {
//   name: "Ashfaq",
//   age: 30,
// };

// const user4: IUser = {
//   name: "Shamim",
//   age: 55,
// };

// For simpler code we can user interface extension
//? Clean for object types. So better to use interface in such cases.
interface IUserWithRole extends IUser {
  role: "Admin" | "User";
}

const user5: IUserWithRole = {
  name: "Ashfaq",
  age: 30,
  role: "Admin",
};

const user6: IUserWithRole = {
  name: "Shamim",
  age: 55,
  role: "User",
};

//* Function interface

type AddFunction = (a: number, b: number) => number;

//? less clean. So better to use types instead of interface for function types.
interface IAddFunction {
  (a: number, b: number): number;
}
const add: AddFunction = (a, b) => a + b;

//? Prerequisite
// type friends = string[];
// const friendList: friends = ["Ashfaq", "Showro", "Mahruk"];

// //? can be written in interface as well
//? Less clean. so better to stick to type for array types as well.
// interface IFriends {
//   [index: number]: string;
// }

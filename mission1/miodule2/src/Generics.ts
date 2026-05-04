//* Dynamically generalized types

// const friendList: string[] = ["Ashfaq", "Showro", "Mahruk"];
// const rollNumbers: number[] = [4, 7, 11];

// const isEligibleList: boolean[] = [true, false, true];
//? Declerations with generics "<>" syntax
//? Easier to create

type GenericArray<T> = T[];

const friendList: GenericArray<string> = ["Ashfaq", "Showro", "Mahruk"];
const rollNumbers: GenericArray<number> = [4, 7, 11];

const isEligibleList: GenericArray<boolean> = [true, false, true];

//? Consider an array of objects

const addressList: GenericArray<object> = [
  {
    city: "Dhaka",
    town: "Gulshan",
  },
  {
    city: "Tangail",
    town: "Kodalia",
  },
];

//? But it does not follow any structure and can lead to errors. So we change it to:
//? this ensures type safety
const addressList1: GenericArray<{ city: string; town: string }> = [
  {
    city: "Dhaka",
    town: "Gulshan",
  },
  {
    city: "Tangail",
    town: "Kodalia",
  },
];

//? can be further broken with a type User for cleaner code:
type User = { city: string; town: string };

const addressList2: GenericArray<User> = [
  {
    city: "Dhaka",
    town: "Gulshan",
  },
  {
    city: "Tangail",
    town: "Kodalia",
  },
];

//* keyof: type operator

type RichPeopleVehicle = {
  car: string; //key:value
  bike: string;
  cng: string;
};

type GeneralPeopleVehicle = "bike" | "car" | "cng";

//* This can be expressed as key of RichPeopleVehicle

type GeneralPeopleVehicle2 = keyof RichPeopleVehicle;

// const myVehicle: GeneralPeopleVehicle2 = "bike"; // allowed
// const myVehicle2: GeneralPeopleVehicle2 = "ship"; // Not allowed

//* keyof with constraints

//? For example, we have an object user and we want to get properties from it using a function
// const user = {
//   id: 1234,
//   name: "Ashfaq",
//   dob: "20-20-2020",
// };

//? function

// const getPropFromObj = (obj: object, key: string) => {
//   return obj[key];
// };

//console.log(getPropFromObj(user, "name")); // works. but look typescript shows an warning in function
// We can literally pass anything as the key parameter. hence, typescript does not know if it exists in the object or not

//? Let's resolve the warning
//* Lets create a type for the user object
type User = {
  id: number;
  name: string;
  dob: string;
};

// Now user object is of type User
const user: User = {
  id: 1234,
  name: "Ashfaq",
  dob: "20-20-2020",
};

// Let's change the function
// this finally gets rid of the warning
// const getPropFromObj = (obj: User, key: keyof User) => {
//   return obj[key];
// };

//? Another issue comes up we cannot use this function for other type objects
//? let's make the function with generic constraints

const getPropFromObj = <T>(obj: T, key: keyof T) => {
  return obj[key];
};

//? Now, typescript is aware and allows any type of objects and their keys
const result1 = getPropFromObj(user, "dob");
console.log({ result1 });

const anotherObject = {
  id: 123,
  price: "100",
};

const result2 = getPropFromObj(anotherObject, "price");
console.log({ result2 });

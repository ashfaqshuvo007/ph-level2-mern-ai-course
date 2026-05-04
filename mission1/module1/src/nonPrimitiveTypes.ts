//* Non-primitive data types

// array, object
let arr: string[] = ["anime", "thriller", "action"];

arr.push("1");
// arr.push(12) //Not allowed

let mixedArr: (string | number)[] = ["user123", 123, "user456", 456];
mixedArr.push(1111); // allowed

// Tuple
let tuple: [number, number] = [1, 2];

//Tuple with three elements
let tupleThreeElements: [string, number, number] = ["user123", 1, 2];
// tupleThreeElements[0] = 1 // Not allowed
// tupleThreeElements[1] = "user123" // Not allowed

//* Object

// Usert with three names
const user: {
  firstName: string;
  middleName: string;
  lastName: string;
} = {
  firstName: "Ashfaq",
  middleName: "Hussain",
  lastName: "Ahmed",
};

const userWithTwoName: {
  organization: string;
  firstName: string;
  middleName?: string; //Optional type
  lastName: string;
} = {
  organization: "Algodevs",
  firstName: "Ashfaq",
  middleName: "Hussain", // Allowed but not required
  lastName: "Ahmed",
};

// we can update the any property of the object
userWithTwoName.organization = "Another Tech Company";

// Usert with access modifier poroperty
const userWithAccessModifier: {
  readonly organization: string;
  firstName: string;
  middleName: string;
  lastName: string;
} = {
  organization: "Algodevs",
  firstName: "Ashfaq",
  middleName: "Hussain",
  lastName: "Ahmed",
};

// userWithAccessModifier.organization = "Another tech company" // Not allowed

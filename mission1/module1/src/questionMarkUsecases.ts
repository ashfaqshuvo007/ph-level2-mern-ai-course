//* Ternary Operator
const age: number = 20;

const isAdult: string = age >= 18 ? "Adult" : "Minor";

console.log(isAdult);

//* nullish coalescing operator null/undefined
const userInput = null;

const selectedTheme = userInput ?? "Green";

console.log(selectedTheme);

//* Optional chaining operator
const user: {
  address: {
    city: string;
    town: string;
    postalCode?: string;
  };
} = {
  address: {
    city: "Dhaka",
    town: "Gulshan",
  },
};

console.log(user?.address?.postalCode);

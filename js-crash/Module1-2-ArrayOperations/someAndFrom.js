//Some
const currentUserRoles = ["admin", "editor", "subscriber"];
const requiredRoles = ["admin", "editor"];

const hasRequiredRole = requiredRoles.some((role) =>
  currentUserRoles.includes(role),
);

console.log(hasRequiredRole); // Output: true

//From
const numbers = [1, 2, 3, 4, 5];
const evenNumbers = Array.from(numbers, (num) =>
  num % 2 === 0 ? num : null,
).filter((num) => num !== null);

console.log(evenNumbers); // Output: [2, 4]

const arr2 = [2, 3, 4, 5];
const arr = Array.from({ length: arr2 }.fill(0));
console.log(arr); // Output: [0, 0, 0, 0, 0]

// using python range function to create an array of numbers from 0 to 9
const range = (start, end, step) => {
  return Array.from(
    { length: Math.ceil((end - start) / step) },
    (_, i) => start + i * step,
  );
};
const numbersRange = range(0, 10, 1);
console.log(numbersRange); // Output: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

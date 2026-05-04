//* Functions
//* Arrow function, Normal function

//Normal function
function multiply(a: number, b: number): number {
  return a * b;
}

multiply(2, 3); // allowed
// multiply("2", 3) // Not allowed

//? Arrow Function
const add = (a: number, b: number): number => {
  return a + b;
};

add(2, 3); // allowed
// add(2, "3") // Not allowed

//? Object => function => method
const poorUser = {
  name: "Ashfaq",
  age: 35,
  balance: 0,
  topUp(value: number) {
    return (this.balance += value);
  },
};

poorUser.topUp(1000);

console.log(poorUser);

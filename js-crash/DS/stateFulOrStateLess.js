//* Stateful vs Stateless
//* Why Objects intead of Functions?

//?Functions are Stateless, they don't have a state,
//? they just take input and return output.
const counter = (amount) => {
  let count = 0;

  count += amount;
  return count;
};
console.log(counter(5)); // Output: 5
console.log(counter(3)); // Output: 3

//? Objects can have a state, they can store data and
//? have methods that can manipulate that data.

const counterObject = {
  count: 0,
  increment(amount) {
    this.count += amount;
    return this.count;
  },
};

console.log(counterObject.increment(5)); // Output: 5
console.log(counterObject.increment(3)); // Output: 8

//? In the first example, the counter function is stateless, it doesn't remember the previous count.
//? In the second example, the counterObject is stateful, it remembers the count and can manipulate it with the increment method.

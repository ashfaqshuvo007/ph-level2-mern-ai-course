//* Stateful Functions Aka. Closures
//* Why Closures?

//? Closures are functions that have access to the variables in their outer scope,
//? even after the outer function has returned.

let count = 0;

const counterClosure = (amount) => {
  count += amount;
  return count;
};

console.log("===== Using Closure =====");
console.log(counterClosure(5)); // Output: 5
console.log(counterClosure(3)); // Output: 8

//? In this example, the counterClosure function is a closure because it has access to the count variable in its outer scope.
//? The count variable is not defined inside the counterClosure function, but it can still access and manipulate it.

//? Closures are useful for creating stateful functions, where the function can remember and manipulate its own state.
//? This is particularly useful in scenarios like event handlers, timers, or any situation where you want to maintain state across function calls without using global variables.

//! But closures can also lead to memory leaks if not used carefully,
//! as they can keep references to variables that are no longer needed,
//! preventing them from being garbage collected.
//! It's important to be mindful of the scope and lifetime of variables when using closures.
//! Also, it is very JS specific, other languages may not have the same concept of closures,
//! so it's important to understand the language you're working with when using this technique.

//* HENCE, we use objects. But rather than creating objects we will use CLASSES,
//* which are a more modern and cleaner way to create objects in JavaScript.
//* Classes provide a clear syntax for creating objects and handling state, making it easier
//*  to manage and maintain your code.

//* Classes Example:

class Counter {
  constructor(count) {
    this.count = count;
  }

  increment(amount) {
    this.count += amount;
    return this.count;
  }

  printCount() {
    console.log(this.count);
  }
}
console.log("===== Using Class =====");

const counterInstance = new Counter(5);
counterInstance.increment(3); // Output: 8
counterInstance.increment(2); // Output: 10
counterInstance.printCount();

const anotherCounterInstance = new Counter(10);
anotherCounterInstance.increment(3); // Output: 13
anotherCounterInstance.increment(2); // Output: 15
anotherCounterInstance.printCount();

//* Stack implementation using an array

class Stack {
  constructor() {
    this.stack = [];
  }

  // Push an element onto the stack
  //* O(1) time complexity
  push(item) {
    this.stack.push(item);
  }

  // Pop an element from the stack
  //* O(1) time complexity
  pop() {
    if (this.isEmpty()) {
      return undefined; // or throw an error
    }
    return this.stack.pop();
  }

  // Peek at the top element of the stack without removing it
  //* O(1) time complexity
  peek() {
    if (this.isEmpty()) {
      return undefined; // or throw an error
    }
    return this.stack[this.stack.length - 1];
  }

  // Check if the stack is empty
  //* O(1) time complexity
  isEmpty() {
    return this.stack.length === 0;
  }

  // Print the stack
  //* O(n) time complexity
  print() {
    // Slice and reverse causes the O(n) time complexity,
    // as we need to create a copy of the stack and reverse it for printing
    console.log(this.stack.slice().reverse().join(" ---> "));
  }
}
const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.print(); // Output: 3 ---> 2 ---> 1

console.log(stack.peek());
console.log(stack.pop()); // Output: 3
stack.print(); // Output: 2 ---> 1

console.log(stack.isEmpty());
console.log(stack.pop()); // Output: 2
console.log(stack.pop()); // Output: 1
console.log(stack.isEmpty());
console.log(stack.pop()); // Output: undefined (or error)

//* Queue implementation using an array

class Queue {
  constructor() {
    this.queue = [];
  }

  // Enqueue an element onto the queue
  //* O(1) time complexity
  enqueue(item) {
    this.queue.push(item);
  }

  // Dequeue an element from the queue
  //* O(1) time complexity
  dequeue() {
    if (this.isEmpty()) {
      return undefined; // or throw an error
    }
    return this.queue.shift();
  }

  // Peek at the front element of the queue without removing it
  //* O(1) time complexity
  peek() {
    if (this.isEmpty()) {
      return undefined; // or throw an error
    }
    return this.queue[0];
  }

  // Check if the queue is empty
  //* O(1) time complexity
  isEmpty() {
    return this.queue.length === 0;
  }

  // Print the queue
  //* O(n) time complexity
  print() {
    // Slice and reverse causes the O(n) time complexity,
    // as we need to create a copy of the queue and reverse it for printing
    console.log("Start ---> " + this.queue.join(" ---> ") + " ---> End");
  }
}
const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.print(); // Output: Start ---> 1 ---> 2 ---> 3 ---> End

console.log(queue.peek());
console.log(queue.dequeue()); // Output: 1
queue.print(); // Output: Start ---> 2 ---> 3 ---> End

console.log(queue.isEmpty());
console.log(queue.dequeue()); // Output: 2
console.log(queue.dequeue()); // Output: 3
console.log(queue.isEmpty());
console.log(queue.dequeue()); // Output: undefined (or error)

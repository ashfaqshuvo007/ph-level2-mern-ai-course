//* Task: Implement a Queue Using a Linked List
//? A better implementation of a queue using a linked list,
//? which allows for O(1) time complexity for both enqueue and
//? dequeue operations, as opposed to an array-based implementation
//?where dequeue can be O(n) due to shifting elements.
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.tail = null;
    this.size = 0;
  }

  // Enqueue an element onto the queue
  // * O(1) time complexity
  enqueue(item) {
    const newNode = new Node(item);
    if (!this.isEmpty()) {
      this.tail.next = newNode;
      this.tail = newNode;
    } else {
      this.first = newNode;
      this.tail = newNode;
    }
    this.size++;

    return this; // Return the queue instance for chaining
  }

  // Dequeue an element from the queue
  // * O(1) time complexity
  dequeue() {
    if (this.isEmpty()) {
      return undefined; // or throw an error
    }
    const dequeuedData = this.first.data;
    this.first = this.first.next;
    this.size--;

    if (this.isEmpty()) {
      this.tail = null; // If the queue is now empty, reset the tail
    }

    return dequeuedData;
  }

  // Peek at the front element of the queue without removing it
  // * O(1) time complexity
  peek() {
    if (this.isEmpty()) {
      return undefined; // or throw an error
    }
    return this.first.data;
  }

  // Check if the queue is empty
  // * O(1) time complexity
  isEmpty() {
    return this.size === 0;
  }

  // Print the queue
  // * O(n) time complexity
  print() {
    let current = this.first;
    let output = "Start ---> ";
    while (current) {
      output += current.data + " ---> ";
      current = current.next;
    }
    output += "null";
    console.log(output);
  }
}

//? Testing the Queue implementation
const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.print(); // Output: Start ---> 1 ---> 2 ---> 3 ---> null

console.log(queue.peek()); // Output: 1

console.log(queue.dequeue()); // Output: 1
queue.print(); // Output: Start ---> 2 ---> 3 ---> null

console.log(queue.peek()); // Output: 2

console.log(queue.dequeue()); // Output: 2
queue.print(); // Output: Start ---> 3 ---> null

console.log(queue.dequeue()); // Output: 3
queue.print(); // Output: Start ---> null

console.log(queue.peek()); // Output: undefined (or error)
// console.log(queue.dequeue()); // Output: undefined (or error)

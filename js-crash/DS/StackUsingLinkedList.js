//* Task: Implement a Stack Using a Linked List
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.size = 0;
  }

  // Push an element onto the stack
  //* O(1) time complexity
  push(item) {
    const newNode = new Node(item);
    if (this.isEmpty()) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      newNode.next = this.top;
      this.top = newNode;
    }
    this.size++;
    return this;
  }

  // Pop an element from the stack
  //* O(1) time complexity
  pop() {
    if (this.isEmpty()) {
      console.error("Stack is empty. Cannot pop from an empty stack.");
      return undefined; // or throw an error
    }
    const poppedNode = this.top;
    this.top = this.top.next;
    this.size--;
    return poppedNode.data;
  }

  // Peek at the top element of the stack without removing it
  //* O(1) time complexity
  peek() {
    if (this.isEmpty()) {
      console.error("Stack is empty. Cannot peek at an empty stack.");
      return undefined;
    }
    return this.top.data;
  }

  // Check if the stack is empty
  //* O(1) time complexity
  isEmpty() {
    return this.size === 0;
  }

  // Print the stack
  //* O(n) time complexity
  print() {
    let currentNode = this.top;
    if (this.isEmpty()) {
      console.error("Stack is empty.");
      return;
    }
    const stackElements = [];
    while (currentNode) {
      stackElements.push(currentNode.data);
      currentNode = currentNode.next;
    }
    console.log(stackElements.slice().reverse().join(" ---> "));
  }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.print(); // Output: 1 ---> 2 ---> 3

console.log(stack.peek()); // Output: 3
console.log(stack.pop()); // Output: 3
stack.print(); // Output: 1 ---> 2

console.log(stack.pop());
console.log(stack.pop());

stack.print();

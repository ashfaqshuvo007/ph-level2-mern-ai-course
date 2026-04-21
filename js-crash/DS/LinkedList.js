//* Linked List Implementation in JavaScript

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

//? A basic linked list.

// const head = new Node(1);

// head.next = new Node(2);

// head.next.next = new Node(3);

// console.log(head); // Output: Node { data: 1, next: Node { data: 2, next: Node { data: 3, next: null } } }

//? Linked List with basic operations: append, prepend, insert, delete, print

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  //* Append
  append(data) {
    let newNode = new Node(data);
    // If the list is empty
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      // if not empty
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.size++;
    return this;
  }

  //* Prepend
  prepend(data) {
    let newNode = new Node(data);
    // If the list is empty
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      // if not empty
      newNode.next = this.head;
      this.head = newNode;
    }
    this.size++;
    return this;
  }

  //* Insert
  //* Best Case: O(1)
  //* Worst Case: O(n)
  insert(data, position) {
    //If invalid position is given
    if (position < 0 || position > this.size) {
      console.error("Invalid position");
      return;
    }

    // If inserting at the beginning
    if (position === 0) {
      this.prepend(data);
      return;
    }

    // If inserting at the end
    if (position === this.size) {
      this.append(data);
      return;
    }

    // If inserting in the middle

    //? Traverse to the position where we want to insert
    const leadingNode = this._traverseToPosition(position - 1);
    const holdingNode = leadingNode.next;

    const newNode = new Node(data);
    leadingNode.next = newNode;
    newNode.next = holdingNode;

    this.size++;
  }

  //* Delete
  delete(position) {
    //If invalid position is given
    if (position < 0 || position >= this.size) {
      console.log("Invalid position");
      return;
    }
    // If deleting the head
    if (position === 0) {
      const removedNode = this.head.data;
      this.head = this.head.next;

      if (this.size === 1) {
        this.tail = null;
      }

      this.size--;
      return removedNode;
    }

    const leadingNode = this._traverseToPosition(position - 1);
    // If deleting in the middle
    const nodeToDelete = leadingNode.next;
    leadingNode.next = nodeToDelete.next;

    // If deleting the tail
    if (position === this.size - 1) {
      leadingNode.next = null;
      this.tail = leadingNode;
      this.size--;
      return;
    }

    return nodeToDelete.data;
  }

  //* Helper method to traverse to a specific position
  _traverseToPosition(position) {
    let counter = 0;
    let currentNode = this.head;

    while (counter !== position) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  //* Print
  print() {
    const elements = [];
    let currentNode = this.head;

    while (currentNode !== null) {
      elements.push(currentNode.data);
      currentNode = currentNode.next;
    }
    console.log(elements.join(" -> "), "-> null");
  }
}

const linkedList = new LinkedList();
linkedList.append("A");

linkedList.print();

linkedList.delete(0);
linkedList.print();

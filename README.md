# Ph Level 2 - MERN AI Course

A comprehensive learning repository for JavaScript fundamentals, including array operations and data structures, as part of the Level 2 MERN AI course curriculum.

## 📚 Repository Structure

### Overview

```
ph-level2-mern-ai-course/
├── README.md                 # This file
├── .git/                     # Git version control
└── js-crash/                 # JavaScript fundamentals & concepts
    ├── Module1-2-ArrayOperations/    # Advanced array manipulation techniques
    ├── Module3-DataStructures/       # Data structures implementation
    └── Module4-AlgorithmsInAction/   # Algorithms and advanced techniques (in progress)
```

---

## 📂 Folder Contents

### `js-crash/Module1-2-ArrayOperations/`

Advanced techniques for manipulating and transforming arrays in JavaScript. **Module 1 & 2**

#### Files:

1. **Binning.js**
   - **Description**: Groups a range of values into smaller intervals (bins)
   - **Example**: Grouping task durations into time ranges (0-9s, 10-19s,etc.)
   - **Concepts**: Data grouping, interval analysis, frequency distribution

2. **clientSideJoin.js**
   - **Description**: Client-side denormalization - joining related data structures
   - **Use Case**: Combining users with their orders on the client side
   - **Technique**: Lookup tables, array mapping, data normalization
   - **Concepts**: Data relationships, lookup operations, client-side queries

3. **reduceSupercharged.js**
   - **Description**: Advanced usage of the `reduce()` method for complex transformations
   - **Concepts**: Functional programming, accumulator patterns, data aggregation

4. **someAndFrom.js**
   - **Description**: Using `Array.prototype.some()` and `Array.from()` methods
   - **Concepts**: Array testing, type conversions, array creation utilities

5. **sortAndFlat.js**
   - **Description**: Sorting arrays and flattening nested structures
   - **Concepts**: Sorting algorithms, nested arrays, array flattening

6. **transformationChain.js**
   - **Description**: Chaining multiple array methods for data transformation pipelines
   - **Concepts**: Method chaining, functional composition, data pipelines

---

### `js-crash/Module3-DataStructures/`

Implementation of fundamental data structures with basic operations. **Module 3**

#### Files:

1. **LinkedList.js**
   - **Description**: Complete Linked List implementation
   - **Operations**: Append, prepend, insert, delete, print
   - **Time Complexity**: O(n) for most operations
   - **Use Cases**: Dynamic size collections, efficient insertions/deletions
   - **Concepts**: Node-based structures, pointer management, traversal

2. **Stack.js**
   - **Description**: Stack (LIFO - Last In First Out) implementation using arrays
   - **Core Methods**:
     - `push(item)` - Add element (O(1))
     - `pop()` - Remove and return top element (O(1))
     - `peek()` - View top element without removing (O(1))
   - **Use Cases**: Undo/redo functionality, expression evaluation, backtracking
   - **Concepts**: LIFO principle, O(1) operations

3. **Queue.js**
   - **Description**: Queue (FIFO - First In First Out) implementation
   - **Use Cases**: Task scheduling, breadth-first search, request handling
   - **Concepts**: FIFO principle, enqueue/dequeue operations

4. **MakingStatefulFunctions.js**
   - **Description**: Creating functions that maintain internal state using closures
   - **Concepts**: Closures, state management, function factories, encapsulation

5. **stateFulOrStateLess.js**
   - **Description**: Comparison and patterns for stateful vs stateless functions
   - **Concepts**: Pure functions, side effects, functional programming patterns

6. **StackUsingLinkedList.js**
   - **Description**: Stack implementation using a Linked List instead of an array
   - **Advantage**: Better for understanding pointer-based structures
   - **Concepts**: Linked List-based stacks, node traversal, LIFO with pointers

7. **QueueUsingLinkedList.js**
   - **Description**: Queue implementation using a Linked List
   - **Advantage**: Efficient for large datasets, no need to shift elements
   - **Concepts**: Linked List-based queues, FIFO with pointers, head/tail operations

---

### `js-crash/Module4-AlgorithmsInAction/`

Advanced algorithms and problem-solving patterns. **Module 4** (Coming Soon)

_This module is currently in progress and will include implementations of common algorithms._

---

## 🎯 Learning Objectives

By working through this repository, you will learn:

### Array Operations

- Advanced array manipulation techniques
- Data transformation and aggregation patterns
- Method chaining and functional composition
- Real-world use cases for different array methods

### Data Structures

- Fundamental data structure implementations
- Time and space complexity considerations
- Common applications and use cases
- Building blocks for more complex algorithms

---

## 🚀 Getting Started

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd ph-level2-mern-ai-course
   ```

2. **Explore the modules**
   - Start with `Module1-2-ArrayOperations/` to understand array manipulation
   - Move to `Module3-DataStructures/` for data structure fundamentals
   - Explore `Module4-AlgorithmsInAction/` for advanced algorithm patterns

3. **Run examples**
   ```bash
   node js-crash/Module1-2-ArrayOperations/Binning.js
   node js-crash/Module3-DataStructures/Stack.js
   ```

---

## 📝 Notes

- Each file is self-contained with clear comments and examples
- Code includes TODO/FIXME comments for exercises
- Real-world use cases are provided for each concept
- Implementations focus on understanding rather than performance optimization

---

## 📚 Topics Covered

### Array Techniques

- Binning and grouping data
- Client-side joins and denormalization
- Reduce patterns and accumulation
- Sorting and flattening
- Method chaining

### Data Structures

- Linked Lists (nodes and traversal)
- Stacks (LIFO operations) - Array-based and Linked List-based
- Queues (FIFO operations) - Array-based and Linked List-based
- Stateful vs stateless functions
- Closures and encapsulation

### Algorithms

- Problem-solving patterns (Module 4 - Coming Soon)
- Algorithm optimization techniques
- Real-world algorithm applications

---

## 🔧 Technologies & Concepts

- **JavaScript (ES6+)**
- **Object-Oriented Programming**
- **Functional Programming**
- **Data Structures & Algorithms**
- **Closures and Scope**
- **Asynchronous Patterns**

---

## 📌 Course Level

**Level 2 - MERN Stack with AI Integration**

- Advanced JavaScript fundamentals
- Data manipulation and algorithms
- Foundation for backend development

---

_Last Updated: April 2026_

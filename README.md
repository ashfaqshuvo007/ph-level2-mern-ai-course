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

Advanced algorithms and problem-solving patterns. **Module 4** ✅ Completed

#### Files:

1. **ValidParenthesis.js**
   - **Description**: Validates if a string of parentheses, brackets, and braces is correctly matched and ordered
   - **Approach**: Stack-based solution
   - **Use Cases**: Expression validation, syntax checking, compiler parsing
   - **Time Complexity**: O(n), **Space Complexity**: O(n)
   - **Concepts**: Stack data structure, bracket matching, validation patterns

2. **TwoSum.js**
   - **Description**: Finds two numbers in an array that add up to a target sum
   - **Approach**: Hash map for efficient lookup
   - **Use Cases**: Financial calculations, pair finding algorithms
   - **Time Complexity**: O(n), **Space Complexity**: O(n)
   - **Concepts**: Hash maps, two-pointer technique, lookup optimization

3. **PalindromeChecker.js**
   - **Description**: Checks if a string or number is a palindrome
   - **Approach**: Two-pointer technique from both ends
   - **Use Cases**: String validation, data verification
   - **Time Complexity**: O(n), **Space Complexity**: O(1)
   - **Concepts**: String manipulation, character comparison, reverse operations

4. **BinarySearch.js**
   - **Description**: Efficient search algorithm for sorted arrays
   - **Approach**: Divide and conquer by halving the search space
   - **Use Cases**: Large dataset searches, efficient lookups in sorted data
   - **Time Complexity**: O(log n), **Space Complexity**: O(1) or O(log n) for recursive
   - **Concepts**: Divide and conquer, logarithmic search, sorted array requirements

5. **SelectionSort.js**
   - **Description**: Sorts an array by repeatedly finding the minimum element
   - **Approach**: Divides array into sorted and unsorted portions
   - **Time Complexity**: O(n²) all cases, **Space Complexity**: O(1)
   - **Concepts**: Sorting algorithms, element selection, in-place sorting
   - **Note**: Minimal memory writes, but slower than insertion sort

6. **InsertionSort.js**
   - **Description**: Sorts an array by building a sorted array one item at a time
   - **Approach**: Adaptive sorting algorithm - faster on nearly sorted data
   - **Time Complexity**: Best O(n), Average/Worst O(n²), **Space Complexity**: O(1)
   - **Concepts**: Adaptive sorting, online sorting, stable sorting
   - **Advantage**: Efficient for small arrays and partially sorted data

7. **CacheUsingMap.js**
   - **Description**: Implements a caching system using JavaScript Map with LRU (Least Recently Used) eviction
   - **Use Cases**: Performance optimization, memoization, data caching
   - **Concepts**: Map data structure, cache eviction policies, memory management
   - **Time Complexity**: O(1) for get/set operations

8. **MututalFriendsUsingSet.js**
   - **Description**: Finds mutual friends between two users using Set intersection
   - **Approach**: Set operations for efficient comparison
   - **Use Cases**: Social network algorithms, relationship analysis, data deduplication
   - **Time Complexity**: O(n + m), **Space Complexity**: O(min(n, m))
   - **Concepts**: Set data structure, intersection operations, graph relationships

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

### Algorithms

- Classic problem-solving patterns and approaches
- Stack-based algorithms (parenthesis matching, expression evaluation)
- Search algorithms (binary search, linear search)
- Sorting algorithms (selection sort, insertion sort, comparison and analysis)
- Hash-based optimizations (hash maps for lookups)
- Set operations and data deduplication
- Cache design patterns and memory optimization
- Time and space complexity trade-offs

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

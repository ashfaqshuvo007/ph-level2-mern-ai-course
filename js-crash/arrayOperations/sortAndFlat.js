// ======= Sorting Arrays in JavaScript =======

// In-place sort happens
// Lexixographical sorting
// Case-sensitive sorting
// constraints:
// 1. No new array is created,
// 2. The original array is modified
// 3. The sort is based on Unicode code point values of the elements
const fruits = ["banana", "apple", "grape", "orange"];
const numbers = [40, 100, 1, 5, 25, 10];

// Sorting fruits in lexicographical order
fruits.sort();
console.log("Sorted Fruits:", fruits); // Output: ["apple", "banana", "grape", "orange"]

// Sorting fruits in case-sensitive order
const mixedCaseFruits = ["Banana", "apple", "Grape", "orange"];
mixedCaseFruits.sort();
console.log("Sorted Mixed Case Fruits:", mixedCaseFruits); // Output: ["Banana", "Grape", "apple", "orange"]
//Fixing the sorting of fruits by using a custom comparator function for case-insensitive sorting
mixedCaseFruits.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
console.log("Sorted Mixed Case Fruits (Case-Insensitive):", mixedCaseFruits); // Output: ["apple", "Banana", "Grape", "orange"]

// Sorting numbers in ascending order (lexicographical sorting)
numbers.sort();
console.log("Sorted Numbers (Lexicographical):", numbers); // Output: [1, 10, 100, 25, 40, 5]

// ======= Faltening Arrays in JavaScript =======
const nestedArray = [1, 2, [3, 4], [5, 6, [7, 8]], 9];
// Default depth is 1, so it will only flatten one level of nested arrays
const flattenedArray = nestedArray.flat();
console.log("Flattened Array (Depth 1):", flattenedArray); // Output: [1, 2, 3, 4, 5, 6, [7, 8], 9]

// Flattening with depth of 2 to flatten all nested arrays
const fullyFlattenedArray = nestedArray.flat(2);
console.log("Fully Flattened Array (Depth 2):", fullyFlattenedArray); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]
// The flat() method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.

// Flattening with Infinity to flatten all levels of nested arrays
const completelyFlattenedArray = nestedArray.flat(Infinity);
console.log("Completely Flattened Array (Infinity):", completelyFlattenedArray); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]

// Real-world example of using sort for duplicate removal and flat together

const tagsForPosts = [
  ["javascript", "webdev", "programming"],
  ["javascript", "react", "frontend"],
  ["webdev", "css", "design"],
];

// Flattening the nested array of tags and removing duplicates using Set
const uniqueTags = [...new Set(tagsForPosts.flat())];
console.log("Unique Tags:", uniqueTags); // Output: ["javascript", "webdev", "programming", "react", "frontend", "css", "design"]

// Another example of using sort to sort products by price and flat to flatten nested product categories

const products = [
  {
    id: "prod_021",
    name: "Apple iPhone 13 Pro Max",
    category: "Electronics",
    price: 1099,
    rating: 4.9,
    inStock: true,
  },
  {
    id: "prod_022",
    name: "Sony WH-1000XM4 Wireless Headphones",
    category: "Electronics",
    price: 349,
    rating: 4.8,
    inStock: true,
  },
  {
    id: "prod_023",
    name: "Dell XPS 15 Laptop",
    category: "Electronics",
    price: 1499,
    rating: 4.7,
    inStock: false,
  },
];

// Sorting products by price in ascending order
products.sort((a, b) => a.price - b.price);
console.log("Products Sorted by Price:", products);

// Example of flattening nested product categories
const productCategories = [
  ["Electronics", "Gadgets"],
  ["Home Appliances", "Kitchen"],
  ["Books", "Fiction", "Non-Fiction"],
];

// Flattening the nested array of product categories
const allCategories = productCategories.flat();
console.log("All Product Categories:", allCategories); // Output: ["Electronics", "Gadgets", "Home Appliances", "Kitchen", "Books", "Fiction", "Non-Fiction"]

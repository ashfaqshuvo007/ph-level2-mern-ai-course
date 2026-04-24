//* Problem Statement

// Implement a simple in-memory cache for an "expensive" function (like a database query or API call).
// THe goal is to store the results of a funtion call so that if we encounter the same call again,
// the result is returned from the cache instead of running the expensive function again.

// * Solution: Using a Map to Implement a Cache

class Cache {
  constructor() {
    this.cache = new Map();
  }

  // Method to get a value from the cache
  get(key) {
    return this.cache.get(key);
  }

  // Method to set a value in the cache
  set(key, value) {
    this.cache.set(key, value);
  }

  // Method to check if a key exists in the cache
  has(key) {
    return this.cache.has(key);
  }
}

// Example of an expensive function (simulated with a timeout)
function expensiveFunction(num) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(num * num); // Just an example of an expensive calculation
    }, 1000);
  });
}
const cache = new Cache();
const getData = async (num) => {
  if (cache.has(num)) {
    console.log("Fetching from cache...");
    return cache.get(num);
  } else {
    console.log("Calculating result...");
    const result = await expensiveFunction(num);
    cache.set(num, result);
    return result;
  }
};

// Testing the cache implementation
(async () => {
  console.log(await getData(5)); // Calculating result... (after 1 second) => 25
  console.log(await getData(5)); // Fetching from cache... => 25
  console.log(await getData(10)); // Calculating result... (after 1 second) => 100
  console.log(await getData(10)); // Fetching from cache... => 100

  console.log(cache);
})();

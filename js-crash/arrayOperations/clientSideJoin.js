//? Client Side Join - A.k.a. Denormalization client side

const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
];

const orders = [
  { id: 101, userId: 1, product: "Laptop" },
  { id: 102, userId: 2, product: "Phone" },
  { id: 103, userId: 1, product: "Tablet" },
  { id: 104, userId: 3, product: "Headphones" },
  { id: 105, userId: 2, product: "Monitor" },
  { id: 106, userId: 3, product: "Keyboard" },
];

//TODO: Lookup table for orders by userId
const ordersByUserId = orders.reduce((acc, order) => {
  if (!acc[order.userId]) {
    acc[order.userId] = [];
  }
  acc[order.userId].push(order);
  return acc;
}, {});

//TODO: Join users with their orders
const usersWithOrders = users.map((user) => {
  return {
    ...user,
    orders: ordersByUserId[user.id] || [],
  };
});

console.log(JSON.stringify(usersWithOrders));
//? Output
// [
//   { id: 1, name: 'Alice', orders: [ [Object], [Object] ] },
//   { id: 2, name: 'Bob', orders: [ [Object], [Object] ] },
//   { id: 3, name: 'Charlie', orders: [ [Object], [Object] ] }
// ]

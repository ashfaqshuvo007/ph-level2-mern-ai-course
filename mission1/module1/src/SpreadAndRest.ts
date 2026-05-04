//* Spread & Rest Operator

// Spread Operator
const groceries = ["Milk", "Bread", "Eggs"];

const babuNeeds = ["Diaper", "Baby wipes", "Baby lotion"];

const wifeyNeeds = ["Shampoo", "Conditioner", "Body wash"];

const shoppingList = [...groceries, ...babuNeeds, ...wifeyNeeds];

console.log(shoppingList);

// Rest operator
const sendInvitations = (...guests: string[]) => {
  guests.forEach((guest) => {
    console.log(`Send Invitation to ${guest}`);
  });
};

sendInvitations("Ashfaq", "Esha", "Sadia", "Shamim", "Salina");

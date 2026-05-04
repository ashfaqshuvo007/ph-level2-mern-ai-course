//* Nullable type

const getUser = (input: string | null) => {
  if (input) {
    console.log("Ashfaq");
  } else {
    console.log("All User");
  }
};

//* Unknown Type

const calculateDiscount = (input: unknown) => {
  if (typeof input === "number") {
    console.log(input * 0.1);
  } else if (typeof input === "string") {
    const [discountPrice] = input.split(" ");
    console.log(Number(discountPrice) * 0.1);
  } else {
    console.log("Invalid Input");
  }
};

calculateDiscount(100);
calculateDiscount("100 TK");
calculateDiscount(null);

//* Never Type

const thowError = (message: string): never => {
  throw new Error(message);
};

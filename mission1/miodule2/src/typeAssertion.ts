//* Type assertion in typescript

// let anything: any;

// anything = "Ashfaq";

// console.log(anything);

//* Type assertion

const kgToGramConverter = (
  weight: number | string,
): string | number | undefined => {
  if (typeof weight === "number") {
    return weight * 1000;
  } else if (typeof weight === "string") {
    const [value] = weight.split(" ");
    return `Converted output is: ${Number(value) * 1000}`;
  }
};

const result1 = kgToGramConverter(2) as number;
console.log({ result1 });
const result2 = kgToGramConverter("2 kg") as string;
console.log({ result2 });

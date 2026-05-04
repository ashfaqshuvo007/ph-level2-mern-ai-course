//* Mapped Types

//* Somewhat similar to maping over an array

const arrayOfNum = [1, 2, 3, 4, 5];

const arrOfStringUsingMap: string[] = arrayOfNum.map((n) => n.toString());

//* Similarly think of type

type AreaOfNum = {
  length: number;
  height: number;
};

// If we want len and height as strings

// type AreaOfString = {
//   length: string;
//   height: string;
// };

//* this goes on ... for other data types

//* Much cleaner is using mapped types */

type AreaOfString = {
  [key in keyof AreaOfNum]: string;
};

//* Much cleaner is using generic mapped types */

type Area<T> = {
  [key in keyof T]: T[key];
};

const area1: Area<{ length: number; height: number }> = {
  length: 50,
  height: 50,
};

const area2: Area<{ length: string; height: boolean }> = {
  length: "50",
  height: true,
};

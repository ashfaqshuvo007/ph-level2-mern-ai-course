//* Generic Function

const createArrayWithString = (value: string) => [value];
const createArrayWithNumber = (value: number) => [value];
const createArrayWithUserObject = (value: { id: number; name: string }) => {
  return [value];
};

const arrString = createArrayWithString("apple");
const arrNUm = createArrayWithNumber(25);
3;
const arrObj = createArrayWithUserObject({
  id: 123,
  name: "Ashfaq",
});

//? This repeatation of creating separate fuctions
//? can be shortened with a generic function

const createArray = <T>(value: T) => {
  return [value];
};

//? Now we don't need three separate func:

const arrString1 = createArray("apple");
const arrNUm1 = createArray(25);
const arrObj1 = createArray({
  id: 123,
  name: "Ashfaq",
});

//* We can create function with multiple generics

//? For exaple, now we create tuple

//? Previously,
const createArrayWithTuple = (p1: string, p2: number) => {
  return [p1, p2];
};

//? But what if we need the params to be dynamic i.e. we want to make it flexible to handle anytype
const createArrayWithTuple1 = (p1: string, p2: Object) => {
  return [p1, p2];
};

//? And so on...

//* Again we won't create multiple function. rather:

const createArrayTupleWithGeneric = <X, Y>(p1: X, p2: Y) => {
  return [p1, p2];
};

// All allowed
const res1 = createArrayTupleWithGeneric(1, 2);
const res2 = createArrayTupleWithGeneric(1, "2");
const res3 = createArrayTupleWithGeneric("1", { id: 123, name: "Ashfaq" });

//* A more detailed example
// Two students with different properties
const student1 = {
  id: 123,
  name: "Ashfaq",
};

const student12 = {
  id: 13,
  name: "John Doe",
  isMarried: true,
  hasCar: true,
};

// we want receive any of the student and show result

const addStudentToCourse = <T>(studentInfo: T) => {
  return {
    courseName: "Next Level",
    ...studentInfo,
  };
};

console.log(addStudentToCourse(student1)); // { courseName: 'Next Level', id: 123, name: 'Ashfaq' }
console.log(addStudentToCourse(student12));

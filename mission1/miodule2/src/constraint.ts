//* Constraints: strict rules for typescript

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

//! While, the above design works perfect, But it has a major flaw.
//? For example, consider another student object
// const student3 = {
//   hasWatch: true,
// };

//? This can still be passed into addStudentToCourse,
//? but does a student make sense without an id or a name.

//* Here contraint or rule might play a role.
//* i.e we set some required properties for an object while using generics.

const addStudentToCourseWithConstraints = <
  T extends { id: number; name: string },
>(
  studentInfo: T,
) => {
  return {
    courseName: "Next Level",
    ...studentInfo,
  };
};

//* now if we pass student3 it gives error

//addStudentToCourseWithConstraints(student3); // failing since student3 does not have required properties

const student3 = {
  id: 123,
  name: "Jane Doe",
  hasWatch: true,
};

//* Now it does not throw error
addStudentToCourseWithConstraints(student3);

//? To clean even more, when the required properties are a lot
//? we can create a type

type Student = { id: number; name: string };

//* our function now becomes

const addStudentToCourseWithConstraints2 = <T extends Student>(
  studentInfo: T,
) => {
  return {
    courseName: "Next Level",
    ...studentInfo,
  };
};

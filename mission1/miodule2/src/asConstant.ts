//* As const -  an enum alternative

//* Take this example Using enums

// enum UserRoles2 {
//   Admin = "ADMIN",
//   Editor = "EDITOR",
//   Viewer = "VIEWER",
// }

// const canEditWithEnums = (role: UserRoles2) => {
//   return role === UserRoles2.Admin || role === UserRoles2.Editor ? true : false;
// };

// console.log(canEditWithEnums(UserRoles2.Admin));

//* AS const Assertion

const UserRoles = {
  Admin: "Admin",
  Editor: "Editor",
  Viewer: "Viewer",
} as const;

const canEditWithAsConstEnums = (role: keyof typeof UserRoles) => {
  return role === UserRoles.Admin || role === UserRoles.Editor ? true : false;
};

console.log(canEditWithAsConstEnums(UserRoles.Admin));

//* Another Example

//? Somtimes we use values in All caps

//i.e.

const UserRoles2 = {
  Admin: "ADMIN",
  Editor: "EDITOR",
  Viewer: "VIEWER",
} as const;

// In this there should some more changes
const canEditWithAsConstEnums2 = (
  role: (typeof UserRoles2)[keyof typeof UserRoles2],
) => {
  return role === UserRoles2.Admin || role === UserRoles2.Editor ? true : false;
};

console.log(canEditWithAsConstEnums2(UserRoles2.Admin));

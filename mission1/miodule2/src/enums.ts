// Enums: Mostly what I've seen in Java/Kotlin

//? For example, we have certain user roles and based on the role we allow editing

//* without enums

// type UserRoles = "Admin" | "Editor" | "Viewer";

// const canEdit = (role: UserRoles) => {
//   return role === "Admin" || role === "Editor" ? true : false;
// };

// console.log(canEdit("Admin"));

//* Using enums

enum UserRoles2 {
  Admin = "ADMIN",
  Editor = "EDITOR",
  Viewer = "VIEWER",
}

const canEditWithEnums = (role: UserRoles2) => {
  return role === UserRoles2.Admin || role === UserRoles2.Editor ? true : false;
};

console.log(canEditWithEnums(UserRoles2.Admin));

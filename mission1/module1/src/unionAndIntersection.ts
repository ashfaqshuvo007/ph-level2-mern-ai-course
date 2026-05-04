//* Union

type userRole = "Admin" | "User";

const dashboard = (role: userRole) => {
  if (role === "Admin") {
    console.log("Admin Dashboard");
  }
  if (role === "User") {
    console.log("User Dashboard");
  }
};

//* Intersection

type Employee = {
  id: string;
  name: string;
  phoneNo: string;
};

type Manager = {
  designation: string;
  department: string;
};

type EmployeeAndManager = Employee & Manager;

const employeeManager: EmployeeAndManager = {
  id: "123",
  name: "Ashfaq",
  phoneNo: "111111",
  designation: "Manager",
  department: "IT",
};

//* Generics with Interfaces

interface Developer<T, X = null> {
  name: string;
  salary: number;
  device: {
    brand: string;
    model: string;
    releaseYear: string;
  };
  smartWatch: T; // Generic
  bike?: X;
}

// Cleaning further
interface IWithoutBrandWatch {
  heartRate: string;
  stopWatch: boolean;
}

const internDeveloper: Developer<
  IWithoutBrandWatch,
  { brand: "Yamaha"; engineCapacity: "200CC" }
> = {
  name: "Intern",
  salary: 20,
  device: {
    brand: "Lenovo",
    model: "LX205",
    releaseYear: "2010",
  },
  smartWatch: {
    heartRate: "120",
    stopWatch: true,
  },
};

// Cleaning further:

interface IAppleWatch {
  heartRate: string;
  callSupport: boolean;
  calculator: boolean;
  AiFeature: boolean;
}

// Dynamically changing type using generics
// for this object gving X is forced, so we give a default value
const intermediateDeveloper: Developer<IAppleWatch> = {
  name: "Jophn Doe",
  salary: 100,
  device: {
    brand: "HP",
    model: "HX205",
    releaseYear: "2025",
  },
  smartWatch: {
    heartRate: "120",
    calculator: true,
    callSupport: true,
    AiFeature: true,
  },
  bike: null,
};

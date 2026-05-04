//* Utility types

// More more details: https://www.typescriptlang.org/docs/handbook/utility-types.html

interface IProduct {
  id: number;
  name: string;
  qty: number;
  color: string;
  size?: string;
}

//? Pick some of the properties
type ProductSummary = Pick<IProduct, "id" | "name">;

//? Omit some of the properties.

type ProductWithoutColor = Omit<IProduct, "color">;

//? Color is nullable but if we need all properties for a Product
type ProductWithALl = Required<IProduct>;

//? Partial products for product, all properties become nullable
type PartialProduct = Partial<IProduct>;

//? Record type, allows empty object declaration
interface IProduct1 {
  id: number;
  name: string;
  qty: number;
}

type emptyProduct = Record<string, unknown>;

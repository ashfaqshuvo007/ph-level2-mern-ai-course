const products = [
  {
    id: "prod_001",
    name: "iPhone 14",
    category: "Electronics",
    price: 799,
    rating: 4.7,
    inStock: true,
  },
  {
    id: "prod_002",
    name: "Samsung Galaxy S23",
    category: "Electronics",
    price: 749,
    rating: 4.6,
    inStock: true,
  },
  {
    id: "prod_003",
    name: "MacBook Air M2",
    category: "Electronics",
    price: 1199,
    rating: 4.8,
    inStock: false,
  },
  {
    id: "prod_004",
    name: "Dell XPS 13",
    category: "Electronics",
    price: 999,
    rating: 4.5,
    inStock: true,
  },
  {
    id: "prod_005",
    name: "Sony WH-1000XM5 Headphones",
    category: "Electronics",
    price: 399,
    rating: 4.8,
    inStock: true,
  },

  {
    id: "prod_006",
    name: "Apple Watch Series 8",
    category: "Electronics",
    price: 399,
    rating: 4.6,
    inStock: true,
  },
  {
    id: "prod_007",
    name: "iPad Air (5th Gen)",
    category: "Electronics",
    price: 599,
    rating: 4.7,
    inStock: false,
  },
  {
    id: "prod_008",
    name: 'Samsung 55" QLED TV',
    category: "Electronics",
    price: 899,
    rating: 4.5,
    inStock: true,
  },
  {
    id: "prod_009",
    name: "LG OLED C2 TV",
    category: "Electronics",
    price: 1299,
    rating: 4.9,
    inStock: true,
  },
  {
    id: "prod_010",
    name: "PlayStation 5",
    category: "Electronics",
    price: 499,
    rating: 4.9,
    inStock: false,
  },

  {
    id: "prod_011",
    name: "Xbox Series X",
    category: "Electronics",
    price: 499,
    rating: 4.8,
    inStock: true,
  },
  {
    id: "prod_012",
    name: "Nintendo Switch OLED",
    category: "Electronics",
    price: 349,
    rating: 4.7,
    inStock: true,
  },
  {
    id: "prod_013",
    name: "Bose QuietComfort Earbuds II",
    category: "Electronics",
    price: 299,
    rating: 4.6,
    inStock: false,
  },
  {
    id: "prod_014",
    name: "JBL Flip 6 Speaker",
    category: "Electronics",
    price: 129,
    rating: 4.5,
    inStock: true,
  },
  {
    id: "prod_015",
    name: "Canon EOS R10 Camera",
    category: "Electronics",
    price: 979,
    rating: 4.7,
    inStock: true,
  },

  {
    id: "prod_016",
    name: "Nikon Z50 Camera",
    category: "Electronics",
    price: 859,
    rating: 4.6,
    inStock: false,
  },
  {
    id: "prod_017",
    name: "GoPro Hero 11",
    category: "Electronics",
    price: 399,
    rating: 4.7,
    inStock: true,
  },
  {
    id: "prod_018",
    name: "Amazon Echo Dot (5th Gen)",
    category: "Electronics",
    price: 49,
    rating: 4.4,
    inStock: true,
  },
  {
    id: "prod_019",
    name: "Google Nest Hub (2nd Gen)",
    category: "Electronics",
    price: 99,
    rating: 4.5,
    inStock: true,
  },
  {
    id: "prod_020",
    name: "Roku Streaming Stick 4K",
    category: "Electronics",
    price: 49,
    rating: 4.4,
    inStock: false,
  },

  {
    id: "prod_021",
    name: "Logitech MX Master 3 Mouse",
    category: "Electronics",
    price: 99,
    rating: 4.8,
    inStock: true,
  },
  {
    id: "prod_022",
    name: "Apple Magic Keyboard",
    category: "Electronics",
    price: 99,
    rating: 4.6,
    inStock: true,
  },
  {
    id: "prod_023",
    name: "Anker PowerCore 20000",
    category: "Electronics",
    price: 59,
    rating: 4.7,
    inStock: false,
  },
  {
    id: "prod_024",
    name: "TP-Link Archer AX55 Router",
    category: "Electronics",
    price: 129,
    rating: 4.5,
    inStock: true,
  },
  {
    id: "prod_025",
    name: "Seagate 2TB External HDD",
    category: "Electronics",
    price: 79,
    rating: 4.6,
    inStock: true,
  },

  {
    id: "prod_026",
    name: "Samsung T7 Portable SSD 1TB",
    category: "Electronics",
    price: 109,
    rating: 4.8,
    inStock: true,
  },
  {
    id: "prod_027",
    name: "ASUS ROG Strix Gaming Laptop",
    category: "Electronics",
    price: 1499,
    rating: 4.7,
    inStock: false,
  },
  {
    id: "prod_028",
    name: "HP LaserJet Pro Printer",
    category: "Electronics",
    price: 199,
    rating: 4.4,
    inStock: true,
  },
  {
    id: "prod_029",
    name: "Philips Hue Smart Bulb Starter Kit",
    category: "Electronics",
    price: 179,
    rating: 4.6,
    inStock: true,
  },
  {
    id: "prod_030",
    name: "Dyson V11 Cordless Vacuum",
    category: "Electronics",
    price: 599,
    rating: 4.7,
    inStock: false,
  },
];

//* PROCESSING THE PRODUCTS ARRAY
//TODO: Filter products that are in stock
//TODO: Sort By => Rating (High to Low)
//TODO:Slice ===> the top 5 products
//TODO: Map ===> extract only the name and price of each product

const inStockTopFiveProducts = products
  .filter((product) => product.inStock === true)
  .sort((a, b) => b.rating - a.rating)
  .slice(0, 5)
  .map((product) => ({ name: product.name, price: product.price }));
//For one liner, we can chain all the methods together.
// We first filter the products to get only those that are in stock,
// then we sort them by rating in descending order, slice the top five products,
// and finally map to extract only the name and price of each product.

console.log("In Stock Top Five Products:", inStockTopFiveProducts);

import type { IncomingMessage, ServerResponse } from "http";
import { createProduct, readProducts } from "../services/product.service";
import type { IProduct } from "../types/product.type";
import { parseBody } from "../utilities/parseBody";
import { sendResponse } from "../utilities/sendResponse";

export const productController = async (
  req: IncomingMessage,
  res: ServerResponse,
) => {
  const reqUrl = req.url;
  const reqMethod = req.method;
  const urlParts = reqUrl?.split("/");
  const id =
    urlParts && urlParts[1] === "products" ? Number(urlParts[2]) : null;

  // GET ALL PRODUCTS
  if (reqUrl === "/products" && reqMethod === "GET") {
    const products = readProducts();
    sendResponse(res, 200, true, "Product Retrieved Successfully!", products);
  } else if (reqMethod === "GET" && id != null) {
    // GET single products
    const products = readProducts();
    const product = products.find((p: IProduct) => p.id === id);
    if (product != null) {
      sendResponse(res, 200, true, "Product Retrieved Successfully!", product);
    } else {
      sendResponse(res, 404, false, `Product with ${id} Not Found!`, null);
    }
  } else if (reqMethod === "POST" && reqUrl === "/products") {
    const body = await parseBody(req);
    const products = readProducts();
    const newProduct: IProduct = {
      id: products.length + 1,
      ...body,
    };
    // Update products
    products.push(newProduct);
    //Update file
    createProduct(products);

    sendResponse(res, 201, true, "Product created Successfully!", newProduct);
  } else if (reqMethod === "PUT" && id != null) {
    const body = await parseBody(req);
    const products = readProducts();
    const proIndex = products.findIndex((p: IProduct) => p.id === id);
    if (proIndex < 0) {
      sendResponse(res, 404, false, `Product with ${id} Not Found!`, null);
    }
    // Update the product
    products[proIndex] = {
      id: products[proIndex].id,
      ...body,
    };

    // Update the file
    createProduct(products);

    sendResponse(
      res,
      200,
      true,
      "Product Updated Successfully!",
      products[proIndex],
    );
  } else if (reqMethod === "DELETE" && id != null) {
    const products = readProducts();
    const proIndex = products.findIndex((p: IProduct) => p.id === id);
    if (proIndex < 0) {
      sendResponse(res, 404, false, `Product with ${id} Not Found!`, null);
    } else {
      products.splice(proIndex, 1);
      createProduct(products);

      sendResponse(res, 200, true, "Product Deleted Successfully!", null);
    }
  }
};

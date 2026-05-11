import type { IncomingMessage, ServerResponse } from "http";
import { productController } from "../controllers/product.controller";

export const routeHandler = (req: IncomingMessage, res: ServerResponse) => {
  const requestUrl = req.url;
  const requestMethod = req.method;
  if (requestUrl === "/" && requestMethod === "GET") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(
      JSON.stringify({
        message: "Server Health check!",
      }),
    );
  } else if (requestUrl?.startsWith("/products")) {
    productController(req, res);
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(
      JSON.stringify({
        message: "Invalid route!",
      }),
    );
  }
};

import { createServer, IncomingMessage, Server, ServerResponse } from "http";
import { routeHandler } from "./routes/route";
import config from "./config";

const server: Server = createServer(
  (req: IncomingMessage, res: ServerResponse) => {
    // console.log(req.url) // /user / product
    // console.log(req.method) // GET, POST, PUT, DELETE=
    routeHandler(req, res);
  },
);

server.listen(config.port, () => {
  console.log(`Server running on port ${config.port}`);
});

const shutdown = (signal: string) => {
  console.log(`${signal} signal received: closing HTTP server`);

  // 1. Stop accepting new requests
  server.close(() => {
    console.log("HTTP server closed");
    // 2. Close database connections here
    // db.close();
    process.exit(0);
  });
};

// Listen for termination signals
process.on("SIGTERM", () => shutdown("SIGTERM"));
process.on("SIGINT", () => shutdown("SIGINT"));

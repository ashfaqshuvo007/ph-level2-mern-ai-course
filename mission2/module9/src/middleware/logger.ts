import type { NextFunction, Request, Response } from "express";
import fs from "fs";

const logger = (req: Request, res: Response, next: NextFunction) => {
  const date: Date = new Date(Date.now());
  const timeStamp: string = date.toLocaleString();
  const log = `Method-> ${req.method} -  Time -> ${timeStamp} - URL -> ${req.url}`;
  fs.appendFile("./logs/logger.txt", log + "\n", (err) => {
    if (err) console.error("Logger error:", err);
    next();
  });
};

export default logger;

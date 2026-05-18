import dotenv from "dotenv";
import path from "path";

dotenv.config({
  path: path.resolve(process.cwd(), ".env"),
});

const config = {
  port: process.env.PORT,
  apiVersion: process.env.API_VERSION,
  baseUrl: `/${process.env.BASE_URL}/${process.env.API_VERSION}`,
  dbConnString: process.env.DB_CONNECTION_STRING,
  jwtSecret: process.env.JWT_SECRET,
};

export default config;

import express, {
  type Application,
  type NextFunction,
  type Request,
  type Response,
} from "express";
import config from "./config";
import { userRoute } from "./user/user.route";
import { profileRouter } from "./profile/profile.route";
import { authRouter } from "./auth/auth.route";
import logger from "./middleware/logger";
import CookieParser from "cookie-parser";
import cors from "cors";
import globalErrorHandler from "./middleware/globalErrorHandler";

const app: Application = express();

//* Configurations
const BASE_URL = config.baseUrl;

// * Midddlewares
app.use(CookieParser());
app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({ extended: true }));
const corsOptions = {
  origin: `http://localhost:${config.port}/`,
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};
app.use(cors(corsOptions));

//Logger
app.use(logger);

//* root route
app.get(BASE_URL + "/", (req: Request, res: Response) => {
  res.status(200).json({
    message: "Express app running! Health OK",
  });
});

app.use(BASE_URL + "/auth", authRouter);

//* User Routes
app.use(BASE_URL + "/users", userRoute);

//* Profile Routes
app.use(BASE_URL + "/profiles", profileRouter);

app.use(globalErrorHandler);
export default app;

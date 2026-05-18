import express, {
  type Application,
  type Request,
  type Response,
} from "express";
import config from "./config";
import { userRoute } from "./user/user.route";
import { profileRouter } from "./profile/profile.route";
import { authRouter } from "./auth/auth.route";

const app: Application = express();

//* Configurations
const BASE_URL = config.baseUrl;

// * Midddlewares
app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({ extended: true }));

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

export default app;

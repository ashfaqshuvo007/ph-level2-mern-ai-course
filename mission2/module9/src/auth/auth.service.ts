import bcrypt from "bcryptjs";
import { pool } from "../db";
import jwt, { type JwtPayload } from "jsonwebtoken";
import config from "../config";

const loginUser = async (payload: { email: string; password: string }) => {
  const { email, password } = payload;
  // Check if user exists
  const userDetails = await pool.query(
    `
        SELECT * FROM users WHERE email=$1
    `,
    [email],
  );
  if (userDetails.rows.length === 0) {
    throw new Error("Invalid Credentials!");
  }
  const user = userDetails.rows[0];
  // Match password
  const matchPassword = await bcrypt.compare(password, user.password);

  if (!matchPassword) {
    throw new Error("Invalid Credentials!");
  }
  // if match found generate token with TTL
  const accessToken = jwt.sign(user, config.jwtSecret as string, {
    expiresIn: "1d",
  });

  const refreshToken = jwt.sign(user, config.refreshSecret as string, {
    expiresIn: "10d",
  });
  // Respond with success with token payload
  return { accessToken, refreshToken };
  // Else eror
};

const generateRefreshToken = async (token: string) => {
  //* Check refresh token in cookies
  if (!token) {
    throw new Error("Unauthorized!");
  }

  const decodedToken = jwt.verify(
    token as string,
    config.refreshSecret as string,
  ) as JwtPayload;

  const userData = await pool.query(`SELECT * FROM users WHERE email=$1`, [
    decodedToken.email,
  ]);

  //* Check user existss
  if (userData.rows.length === 0) {
    throw new Error("User not Found!");
  }

  const user = userData.rows[0];
  delete user.password;

  //* Check user is active
  if (user?.is_active != true) {
    throw new Error("Forbidden!");
  }

  // if match found generate token with TTL
  const accessToken = jwt.sign(user, config.jwtSecret as string, {
    expiresIn: "1d",
  });

  return { accessToken };
};

export const authService = {
  loginUser,
  generateRefreshToken,
};

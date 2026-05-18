import bcrypt from "bcryptjs";
import { pool } from "../db";
import jwt from "jsonwebtoken";
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
  // Respond with success with token payload
  return { accessToken };
  // Else eror
};

export const authService = {
  loginUser,
};

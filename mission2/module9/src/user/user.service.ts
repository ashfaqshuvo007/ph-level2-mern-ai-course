import bcrypt from "bcryptjs";
import { pool } from "../db";
import type { IUser } from "./user.interface";

const insertUserIntoDB = async (payload: IUser) => {
  const { name, email, password, age, role } = payload;

  const hashPassword = await bcrypt.hash(password, 10);

  const result = await pool.query(
    `INSERT INTO users (name, email, password, age, role)
                VALUES ($1, $2, $3, $4, COALESCE($5, 'user')) RETURNING *;`,
    [name, email, hashPassword, age, role],
  );
  return result;
};

const getUsersFromDB = async () => {
  const result = await pool.query(`SELECT * FROM users`);
  return result;
};

const getSingleUserFromDB = async (id: string) => {
  const result = pool.query(`SELECT * FROM users WHERE id=$1`, [id]);
  return result;
};

const updateUserIntoDB = async (payload: IUser, id: string) => {
  const { name, password, age, is_active, role } = payload;
  const result = pool.query(
    `UPDATE users
      SET name=COALESCE($2,name),
      password=COALESCE($3,password),
      age=COALESCE($4,age),
      is_active=COALESCE($5,is_active),
      role=COALESCE($6,role)

      WHERE id=$1 RETURNING *`,
    [id, name, password, age, is_active, role],
  );
  return result;
};

const deleteUserFromDB = async (id: string) => {
  const result = pool.query(`DELETE FROM users WHERE ID=$1`, [id]);
  return result;
};

export const userService = {
  insertUserIntoDB,
  getUsersFromDB,
  getSingleUserFromDB,
  updateUserIntoDB,
  deleteUserFromDB,
};

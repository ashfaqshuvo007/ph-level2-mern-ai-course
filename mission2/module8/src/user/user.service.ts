import { pool } from "../db";

const insertUserIntoDB = async (payload: any) => {
  const { name, email, password, age } = payload;

  const result = await pool.query(
    `INSERT INTO users (name, email, password, age)
                VALUES ($1, $2, $3, $4) RETURNING *;`,
    [name, email, password, age],
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

const updateUserIntoDB = async (payload: any, id: string) => {
  const { name, password, age, is_active } = payload;
  const result = pool.query(
    `UPDATE users
      SET name=COALESCE($2,name),
      password=COALESCE($3,password),
      age=COALESCE($4,age),
      is_active=COALESCE($5,is_active)

      WHERE id=$1 RETURNING *`,
    [id, name, password, age, is_active],
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

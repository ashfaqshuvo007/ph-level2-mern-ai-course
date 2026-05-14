import express, {
  json,
  type Application,
  type Request,
  type Response,
} from "express";
import { Pool } from "pg";
import config from "./config";
const app: Application = express();

//* Configurations
const port = config.port;
const BASE_URL = config.baseUrl;
const connString = config.dbConnString;

//* DB connection
const pool = new Pool({
  connectionString: connString,
});
//*Create users table
const initDB = async () => {
  try {
    await pool.query(`
        CREATE TABLE IF NOT EXISTS users (
            id SERIAL PRIMARY KEY,
            name VARCHAR(20) NOT NULL,
            email VARCHAR(20) UNIQUE NOT NULL,
            password VARCHAR(20) NOT NULL,
            is_active BOOLEAN DEFAULT true,
            age INT,

            created_at TIMESTAMP DEFAULT NOW(),
            updated_at TIMESTAMP DEFAULT NOW()
        );`);
    console.log("DB connected Successfully!");
  } catch (error) {
    console.log(error);
  }
};
initDB();

// * Midddlewares
app.use(express.json());

app.get(BASE_URL + "/", (req: Request, res: Response) => {
  res.status(200).json({
    message: "Express app running! Health OK",
  });
});

//* POST Users
app.post(BASE_URL + "/users", async (req: Request, res: Response) => {
  const { name, email, password, age } = req.body;
  try {
    const result = await pool.query(
      `INSERT INTO users (name, email, password, age)
                VALUES ($1, $2, $3, $4) RETURNING *;`,
      [name, email, password, age],
    );

    res.status(201).json({
      success: true,
      message: "Users created Successfully!",
      data: result.rows[0],
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
      data: error,
    });
  }
});

//* GET users
app.get(BASE_URL + "/users", async (req: Request, res: Response) => {
  try {
    const result = await pool.query(`SELECT * FROM users`);
    res.status(200).json({
      success: true,
      message: "Users retrieved Successfully!",
      data: result.rows,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
      data: error,
    });
  }
  res.status(200).json({
    message: "Users retrieved Successfully!",
    data: [{}],
  });
});

//* GET single user
app.get(BASE_URL + "/users/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const result = await pool.query(`SELECT * FROM users WHERE id=$1`, [id]);
    if (result.rows.length != 0) {
      res.status(200).json({
        success: true,
        message: "User retrieved Successfully!",
        data: result.rows[0],
      });
    } else {
      res.status(404).json({
        success: false,
        message: `User with id: ${id} not found`,
        data: {},
      });
    }
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
      data: error,
    });
  }
});

// UPDATE cars
// SET color = 'red'
// WHERE brand = 'Volvo';
//* UPDATE single user
app.put(BASE_URL + "/users/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, password, age, is_active } = req.body;
  try {
    const result = await pool.query(
      `UPDATE users 
      SET name=COALESCE($2,name), 
      password=COALESCE($3,password), 
      age=COALESCE($4,age), 
      is_active=COALESCE($5,is_active)
        
      WHERE id=$1 RETURNING *`,
      [id, name, password, age, is_active],
    );
    if (result.rowCount != 0) {
      res.status(200).json({
        success: true,
        message: "User updated Successfully!",
        data: result.rows[0],
      });
    } else {
      res.status(404).json({
        success: false,
        message: `User with id: ${id} not found`,
        data: {},
      });
    }
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
      data: error,
    });
  }
});

//* Delete user
app.delete(BASE_URL + "/users/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const result = await pool.query(`DELETE FROM users WHERE ID=$1`, [id]);
    if (result.rowCount != 0) {
      res.status(200).json({
        success: true,
        message: "User deleted Successfully!",
        data: {},
      });
    } else {
      res.status(404).json({
        success: false,
        message: `User with id: ${id} not found`,
        data: {},
      });
    }
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
      data: error,
    });
  }
});

app.listen(port, () => {
  console.log(`Blog app listening on port ${port}`);
});

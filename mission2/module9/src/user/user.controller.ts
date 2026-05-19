import type { Request, Response } from "express";
import { userService } from "./user.service";
import sendResponse from "../utility/sendResponse";

const createUser = async (req: Request, res: Response) => {
  try {
    const result = await userService.insertUserIntoDB(req.body);
    delete result.rows[0].password;

    sendResponse(res, {
      statusCode: 201,
      success: true,
      message: "Users created Successfully!",
      data: result.rows[0],
    });
  } catch (error: any) {
    sendResponse(res, {
      statusCode: 500,
      success: false,
      message: error.message,
      data: error,
    });
  }
};

const getAllUsers = async (req: Request, res: Response) => {
  try {
    const result = await userService.getUsersFromDB();
    const sanitizedResult = result.rows.map(({ password, ...row }) => row);
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Users retrieved Successfully!",
      data: sanitizedResult,
    });
  } catch (error: any) {
    sendResponse(res, {
      statusCode: 500,
      success: false,
      message: error.message,
      error: error,
    });
  }
};

const getSingleUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const result = await userService.getSingleUserFromDB(id as string);
    delete result.rows[0].password;
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
};

const updateUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const result = await userService.updateUserIntoDB(req.body, id as string);
    delete result.rows[0].password;
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
};

const deleteUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const result = await userService.deleteUserFromDB(id as string);
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
};

export const userController = {
  createUser,
  getAllUsers,
  getSingleUser,
  updateUser,
  deleteUser,
};

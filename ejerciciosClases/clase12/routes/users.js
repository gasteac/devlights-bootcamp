import { Router } from "express";
import {
  getAllUsers,
  getUserById,
  createUser,
  deleteUser,
  updateUser,
  createUserTask,
  getAllTasksByUserId
} from "../controllers/users.js";

const userRoutes = Router();

userRoutes.get("/", getAllUsers);
userRoutes.get("/:userId", getUserById);
userRoutes.post("/", createUser);
userRoutes.delete("/:userId", deleteUser);
userRoutes.put("/:userId", updateUser);
userRoutes.post("/:userId/task", createUserTask)
userRoutes.get("/:userId/tasks", getAllTasksByUserId)
export default userRoutes;

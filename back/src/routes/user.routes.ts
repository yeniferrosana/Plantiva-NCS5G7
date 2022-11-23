import { Router } from "express";
import {
  getUserById,
  getUsers,
  loginUser,
  registerUser,
  updateUserById,
  removeUser
} from "../controllers/user.controller";

const userRoutes = Router();

userRoutes.post("/register", registerUser);

userRoutes.post("/login", loginUser);

userRoutes.get("/", getUsers);

userRoutes.get("/:id", getUserById);

userRoutes.put("/:id", updateUserById);

userRoutes.delete("/:id", removeUser);

export default userRoutes;

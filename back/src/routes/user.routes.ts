import { Router } from "express";
import {
  getUserById,
  getUsers,
  loginUser,
  registerUser,
} from "../controllers/user.controller";

const userRoutes = Router();

userRoutes.post("/register", registerUser);

userRoutes.post("/login", loginUser);

userRoutes.get("/", getUsers);

userRoutes.get("/:id", getUserById);

export default userRoutes;

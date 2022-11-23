import { Router } from "express";
import {
  getUserById,
  getUsers,
  loginUser,
  registerUser,
  updateUserById,
  removeUser
} from "../controllers/user.controller";
import {
  authUserValidator,
  loginValidator,
} from "../middlewares/validators/validators";

const userRoutes = Router();

userRoutes.post("/register", authUserValidator, registerUser);

userRoutes.post("/login", loginValidator, loginUser);

userRoutes.get("/", getUsers);

userRoutes.get("/:id", getUserById);

userRoutes.put("/:id", updateUserById);

userRoutes.delete("/:id", removeUser);

export default userRoutes;

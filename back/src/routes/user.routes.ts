import { Router } from "express";
import {
  getUserById,
  getUsers,
  loginUser,
  registerUser,
  updateUserById,
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

userRoutes.put("/edituser/:id", updateUserById);

export default userRoutes;

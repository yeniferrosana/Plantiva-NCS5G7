import express from "express";
import dotenv from "dotenv";
dotenv.config();
import config from "config";
import userRoutes from "./routes/user.routes";

//init app. define and set port
const app = express();
const port = config.get<number>("port");
app.set("port", port);

//middlewares
app.use(express.json());

//routes
app.use("/user", userRoutes)

export default app;

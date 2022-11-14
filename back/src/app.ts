import express from "express";
import dotenv from "dotenv";
dotenv.config();
import config from "config";

//init app. define and set port
const app = express();
const port = config.get<number>("port");
app.set("port", port);

//middlewares
app.use(express.json());

//routes
import userRoutes from "./routes/user.routes";
import nurseryRoutes from "./routes/nursery.routes";
app.use("/user", userRoutes);
app.use("/nursery", nurseryRoutes);

export default app;

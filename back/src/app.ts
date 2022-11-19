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
import plantsRoutes from "./routes/plants.routes";

app.use("/api/v1/auth/user", userRoutes);
app.use("/api/v1/auth/nursery", nurseryRoutes);
app.use("/api/v1/plants", plantsRoutes);

export default app;

import express from "express";
import dotenv from "dotenv";
dotenv.config()
import config from "config";
import cors from "cors";
import morgan from "morgan";
// Swagger
import swaggerUI from "swagger-ui-express";
import { specs } from "./swaggerOptions";

//init app. define and set port
const app = express();


const port = config.get<number>("port");
app.set("port", port);

// Config whitelist
const whiteList = [process.env.ORIGIN1 + port]

// Cors
app.use(cors({
    origin: function(origin, callback){
        console.log("Conectando=>", origin);
        if (!origin || whiteList.includes(origin)) {
            return callback(null, origin);
        }
        return "Error de CORS origin: " + origin + " No autorizado!"

    },
    credentials: true,
    })
);

//middlewares
app.use(morgan("dev"));
app.use(express.json());

//routes
import userRoutes from "./routes/user.routes";
import nurseryRoutes from "./routes/nursery.routes";
import plantsRoutes from "./routes/plants.routes";
import reviewRoutes from "./routes/reviews.routes"

app.use("/docs/api/v1", swaggerUI.serve, swaggerUI.setup(specs));
app.use("/auth/user", userRoutes);
app.use("/auth/nursery", nurseryRoutes);
app.use("/plants", plantsRoutes);
app.use("/reviews", reviewRoutes);


export default app;
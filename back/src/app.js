import "dotenv/config";
import "./database/connectdb.js";
import http from 'http';
import express from 'express';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import router from "./routes/auth.route.js";


const app = express();
app.server = http.createServer(app);
const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Routes
app.use('/api/v1/auth', router);

// Setting Server
app.set("port", process.env.PORT)

export default app;
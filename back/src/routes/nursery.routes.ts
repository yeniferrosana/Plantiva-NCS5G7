import { Router } from "express";

const nurseryRoutes = Router();

nurseryRoutes.post("/register");

nurseryRoutes.post("/login");

nurseryRoutes.get("/");

nurseryRoutes.get("/:id");

export default nurseryRoutes;

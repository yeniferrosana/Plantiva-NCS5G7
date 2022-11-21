import { Router } from "express";
import { getNurseryById, getNurseries, loginNursery, registerNursery, updateNurseryById } from "../controllers/nursery.controller";

const nurseryRoutes = Router();

nurseryRoutes.post("/register", registerNursery);

nurseryRoutes.post("/login", loginNursery);

nurseryRoutes.get("/", getNurseries);

nurseryRoutes.get("/:id", getNurseryById);

nurseryRoutes.put("/editnursery/:id", updateNurseryById);

export default nurseryRoutes;

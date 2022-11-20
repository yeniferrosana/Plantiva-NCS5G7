import { Router } from "express";
import { getNurseryById, getNursery, loginNursery, registerNursery, putNursery } from "../controllers/nursery.controller";

const nurseryRoutes = Router();

nurseryRoutes.post("/register", registerNursery);

nurseryRoutes.post("/login", loginNursery);

nurseryRoutes.get("/", getNursery);

nurseryRoutes.get("/:id", getNurseryById);

nurseryRoutes.put("/editnursery/:id", putNursery);

export default nurseryRoutes;

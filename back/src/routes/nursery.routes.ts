import { Router } from "express";
import { getNurseryById, getNurseries, loginNursery, registerNursery, updateNurseryById, removeNursery } from "../controllers/nursery.controller";

const nurseryRoutes = Router();

nurseryRoutes.post("/register", registerNursery);

nurseryRoutes.post("/login", loginNursery);

nurseryRoutes.get("/", getNurseries);

nurseryRoutes.get("/:id", getNurseryById);

nurseryRoutes.put("/:id", updateNurseryById);

nurseryRoutes.delete("/:id", removeNursery);

export default nurseryRoutes;

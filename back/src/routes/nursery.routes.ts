import { Router } from "express";
import {
  getNurseryById,
  getNurseries,
  loginNursery,
  registerNursery,
  updateNurseryById,
  removeNursery
} from "../controllers/nursery.controller";
import {
  authNurseryValidator,
  loginValidator,
} from "../middlewares/validators/validators";

const nurseryRoutes = Router();

nurseryRoutes.post("/register", authNurseryValidator, registerNursery);

nurseryRoutes.post("/login", loginValidator, loginNursery);

nurseryRoutes.get("/", getNurseries);

nurseryRoutes.get("/:id", getNurseryById);

nurseryRoutes.put("/:id", updateNurseryById);

nurseryRoutes.delete("/:id", removeNursery);

export default nurseryRoutes;

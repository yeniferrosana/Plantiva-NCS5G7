import { Router } from "express";
import {
  getNurseryById,
  getNurseries,
  loginNursery,
  registerNursery,
  updateNurseryById,
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

nurseryRoutes.put("/editnursery/:id", updateNurseryById);

export default nurseryRoutes;

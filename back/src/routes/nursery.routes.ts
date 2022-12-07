import { Router } from "express";
import {
  getNurseryById,
  getNurseries,
  loginNursery,
  registerNursery,
  updateNurseryById,
  removeNursery,
} from "../controllers/nursery.controller";
import {
  authNurseryValidator,
  loginValidator,
} from "../middlewares/validators/validators";
import { verifyToken } from "../middlewares/validators/verifyToken";

const nurseryRoutes = Router();

nurseryRoutes.get("/", verifyToken, getNurseries);

nurseryRoutes.get("/:id", verifyToken, getNurseryById);

nurseryRoutes.put("/:id", verifyToken, updateNurseryById);

nurseryRoutes.delete("/:id", verifyToken, removeNursery);

export default nurseryRoutes;

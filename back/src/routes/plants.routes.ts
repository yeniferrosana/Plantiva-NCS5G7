import { Router } from "express";
import { getPlantById, getPlants, newPlant, removePlant } from "../controllers/plants.controller";

const plantsRoutes = Router();

plantsRoutes.post("/new", newPlant);

plantsRoutes.get("/", getPlants);

plantsRoutes.get("/:id", getPlantById);

plantsRoutes.delete("/:id", removePlant);

export default plantsRoutes;

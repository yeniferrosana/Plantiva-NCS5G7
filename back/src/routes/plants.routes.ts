import { Router } from "express";
import { getPlantById, getPlants, newPlant } from "../controllers/plants.controller";

const plantsRoutes = Router();

plantsRoutes.post("/new", newPlant);

plantsRoutes.get("/", getPlants);

plantsRoutes.get("/:id", getPlantById);

export default plantsRoutes;

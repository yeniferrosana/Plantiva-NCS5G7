import { Request, Response } from "express";
import { createPlant, findAll, findById } from "../services/plants.service";
import { Plant } from "../database/models/plants.model";

//create new plant
export const newPlant = async (req: Request, res: Response) => {
  try {
    const { title, info, imgs, location } = req.body;

    if (!title || !info || !imgs || !location) {
      return res.status(400).send("Missing fields");
    }

    const newPlant: Plant = { title, info, imgs, location };
   
    const plants = await createPlant(newPlant);
   
    return res.send(plants);
  } catch (err: any) {
    return res.status(409).send("Error creating new plant" +err);
  }
};

//find all plants in DB
export const getPlants = async (req: Request, res: Response) => {
  try {
    const plants = await findAll();

    return res.send(plants);
  } catch (err: any) {
    return res.status(409).send(err);
  }
};

//find one plant by ID
export const getPlantById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const plant = await findById(id);

    return res.send(plant);
  } catch (err: any) {
    return res.status(404).send("Plants not found");
  }
};

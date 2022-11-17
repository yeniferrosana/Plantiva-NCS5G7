import { Request, Response } from "express";
import { findAll, findById } from "../services/plants.service";

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

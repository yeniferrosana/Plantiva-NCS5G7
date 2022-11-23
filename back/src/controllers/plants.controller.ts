import { Request, Response } from "express";
<<<<<<< HEAD
import { createPlant, deletePlant, findAll, findById } from "../services/plants.service";
import { Plant } from "../database/models/plants.model";
=======
import { createPlant, findAll, findById } from "../services/plants.service";
import { IPlant } from "../interfaces/plants.interface";
>>>>>>> d27e1c72337256a268f65256fec5bee4c8a46cd8

//create new plant
export const newPlant = async (req: Request, res: Response) => {
  try {
    const { title, info, imgs, location } = req.body;

    if (!title || !info || !imgs || !location) {
      return res.status(400).send("Missing fields");
    }

    const newPlant: IPlant = { title, info, imgs, location };
   
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

// Plant Delete of the BBDD
export const removePlant = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { title } = req.body;

    if (!title)
      return res.status(404).send('No existe el link')

    const plantDelete = { title };
    const plantRemove = await deletePlant(id, plantDelete);
    
    return res.status(200).send(`El usuario ${plantRemove} fue eliminado`);
  } catch (error: any) {
    if (error.kind === 'ObjectId') {
      return res.status(403).send("Fomrato User ID not found");
    }
    return res.status(500).send('Error del servidor')
  }
};

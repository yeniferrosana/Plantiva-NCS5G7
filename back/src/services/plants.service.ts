import PlantsModel from "../database/models/plants.model";
import { Plant } from "../database/models/plants.model";

export const createPlant = async (input: Plant) => {
  try {
    const plant = await PlantsModel.create(input);

    return plant;
  } catch (err: any) {
    throw new Error(err);
  }
};

export const findAll = async () => {
  try {
    const plants = await PlantsModel.find();

    return plants;
  } catch (err: any) {
    throw new Error(err);
  }
};

export const findById = async (id: string) => {
  try {
    const plant = await PlantsModel.findOne({ _id: id });
    if (!plant) return false;

    return plant;
  } catch (err: any) {
    throw new Error(err);
  }
};

import PlantsModel from "../database/models/plants.model";

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

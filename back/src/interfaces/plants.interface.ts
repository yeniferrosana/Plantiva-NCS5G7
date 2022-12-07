import { PlantsInfo, PlantsLocation } from "../types/plants.types";
import { INurseryDocument } from "../database/models/nursery.model";

export interface IPlant {
  title: string;
  info: PlantsInfo;
  imgs: string;
  location: PlantsLocation;
  nursery: INurseryDocument["_id"];
}

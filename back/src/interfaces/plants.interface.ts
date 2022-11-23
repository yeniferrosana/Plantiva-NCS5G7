import { PlantsInfo, PlantsLocation } from "../types/plants.types";

export interface IPlant {
  title: string;
  info: PlantsInfo;
  imgs: string;
  location: PlantsLocation;
}

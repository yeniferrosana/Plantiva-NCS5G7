import mongoose from "mongoose";

type PlantsInfo = {
  other_names: string;
  habit: string;
  height: number;
  growth: string;
  foliage: string;
  attractive: string;
  irrigation: string;
};

type PlantsLocation = {
  province: string;
  //region: string;
};

export interface Plant {
  title: string;
  info: PlantsInfo;
  imgs: string[];
  location: PlantsLocation;
}

export interface PlantsDocument extends Plant, mongoose.Document {}

const plantsSchema = new mongoose.Schema(
  {
    title: { type: String, required: false },
    info: { type: Object, required: false },
    imgs: { type: Array, required: false },
    location: { type: Object, required: false },
  },
  { timestamps: true }
);

const PlantsModel = mongoose.model<PlantsDocument>("Plants", plantsSchema);

export default PlantsModel;

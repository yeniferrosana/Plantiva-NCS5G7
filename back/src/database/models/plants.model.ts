import mongoose from "mongoose";

interface PlantsInfo {
  other_names: string;
  habit: string;
  height: number;
  growth: string;
  foliage: string;
  attractive: string;
  irrigation: string;
}

export interface PlantsDocument extends PlantsInfo, mongoose.Document {
  title: string;
  info: PlantsInfo;
  imgs: string[];
}

const plantsSchema = new mongoose.Schema(
  {
    title: { type: String, required: false },
    info: { type: String, required: false },
    imgs: { type: Array, required: false },
  },
  { timestamps: true }
);

const PlantsModel = mongoose.model<PlantsDocument>("Plants", plantsSchema);

export default PlantsModel;

import mongoose, { Schema } from "mongoose";

export interface RolesDocument extends mongoose.Document {
  role: string;
  permission: string[];
}

const rolesSchema = new Schema({
  role: { type: String, required: true },
  permission: [{ type: String, required: true }],
});

const RolesModel = mongoose.model<RolesDocument>("Roles", rolesSchema);

export default RolesModel;

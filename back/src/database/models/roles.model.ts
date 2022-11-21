import mongoose, { Schema } from "mongoose";

export interface IRolesDocument extends mongoose.Document {
  role: string;
  permission: string[];
}

const rolesSchema = new Schema<IRolesDocument>({
  role: { type: String, required: true },
  permission: [{ type: String, required: true }],
});

const RolesModel = mongoose.model<IRolesDocument>("Roles", rolesSchema);

export default RolesModel;

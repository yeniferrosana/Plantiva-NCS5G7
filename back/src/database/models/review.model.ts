import mongoose from "mongoose";
import { UserDocument } from "./user.model";

interface ReviewDocument extends mongoose.Document {
  username: UserDocument["_id"];
  rate: number;
  description: string;
}

const reviewSchema = new mongoose.Schema(
  {
    username: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    rate: { type: Number, maxlength: 2, default: 0, required: false },
    description: {
      type: String,
      minlength: 10,
      maxlenght: 100,
      required: false,
    },
  },
  { timestamps: true }
);

export const ReviewModel = mongoose.model<ReviewDocument>(
  "Review",
  reviewSchema
);

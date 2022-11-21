import mongoose from "mongoose";
import { UserDocument } from "./user.model";

export interface IReviewDocument extends mongoose.Document {
  username: UserDocument["_id"];
  rate: number;
  description: string;
}

const reviewSchema = new mongoose.Schema<IReviewDocument>(
  {
    username: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    rate: {
      type: Number,
      maxlength: 2,
      default: 0,
      required: false },
    description: {
      type: String,
      minlength: 10,
      maxlenght: 100,
      required: true,
    },
  },
  { timestamps: true }
);

export const ReviewModel = mongoose.model<IReviewDocument>("Review", reviewSchema);

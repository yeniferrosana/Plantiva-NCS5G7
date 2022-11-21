import mongoose from "mongoose";
import bcrypt from "bcrypt";
import { IRolesDocument } from "./roles.model";
import { hashPassword } from "../../utils/jwt";

export interface INurseryDocument extends mongoose.Document {
  username: string;
  birthdate: Date;
  img: string;
  social: string;
  email: string;
  password: string;
  telephone: number;
  province: string;
  city: string;
  adress: string;
  role: IRolesDocument["_id"];
}

const nurserySchema = new mongoose.Schema<INurseryDocument>(
  {
    username: {
      type: String,
      minlength: 3,
      maxlength: 50,
      required: true,
    },
    birthdate: {
      type: Date,
      required: false,
    },
    img: {
      data: Buffer,
      contentType: String,
      required: false,
    },
    social: {
      type: String,
      required: false,
    },
    email: {
      type: String,
      required: [true, "Please add a E-mail"],
      trim: true,
      unique: false,
      lowercase: true,
      index: { unique: true },
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Please add a valid E-mail",
      ],
    },
    password: {
      type: String,
      required: [true, "Please add a Password"],
      minlength: [6, "Password must have at least six (6) characters"],
      match: [
        /^(?=.*\d)(?=.*[@#\-_$%^&+=!\?])(?=.*[a-z])[0-9A-Za-z@#\-_$%^&+=!\?]+$/,
        "password must contain at least 1 uppercase letter, 1 lowercase letter, 1 number and special characters",
      ],
    },
    telephone: {
      type: Number,
      maxlength: 20,
      required: true,
      unique: true,
    },
    province: {
      type: String,
      maxlength: 20,
      required: true,
    },
    city: {
      type: String,
      maxlength: 20,
      required: false,
    },
    adress: {
      type: String,
      maxlength: 50,
      required: true,
    },
    role: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Roles",
    },
  },
  { timestamps: true }
);

nurserySchema.pre("save", async function (next) {
  let nursery = this;

  if (!nursery.isModified("password")) {
    return next();
  }

  try {
    const hash = await hashPassword(nursery.password);

    nursery.password = hash;
    return next();
  } catch (err: any) {
    throw new Error("Error hashing \n" + err);
  }
});

const NurseryModel = mongoose.model<INurseryDocument>("Nursery", nurserySchema);

export default NurseryModel;

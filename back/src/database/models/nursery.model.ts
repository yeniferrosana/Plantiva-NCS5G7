import mongoose from "mongoose";
import { INursery } from "../../interfaces/nursery.interface";
//import { IRolesDocument } from "./roles.model";
import { hashPassword } from "../../utils/jwt";

export interface INurseryDocument extends INursery, mongoose.Document {}

const nurserySchema = new mongoose.Schema<INurseryDocument>(
  {
    username: {
      type: String,
    },
    birthdate: {
      type: Date,
    },
    img: {
      type: String,
    },
    social: {
      type: String,
    },
    email: {
      type: String,
      /*
      required: [true, "Please add a E-mail"],
      trim: true,
      unique: false,
      lowercase: true,
      index: { unique: true },
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Please add a valid E-mail",
      ],
      */
    },
    password: {
      type: String,
      /*
      required: [true, "Please add a Password"],
      minlength: [6, "Password must have at least six (6) characters"],
      match: [
        /^(?=.*\d)(?=.*[@#\-_$%^&+=!\?])(?=.*[a-z])[0-9A-Za-z@#\-_$%^&+=!\?]+$/,
        "password must contain at least 1 uppercase letter, 1 lowercase letter, 1 number and special characters",
      ],
      */
    },
    telephone: {
      type: Number,
      unique: true,
    },
    province: {
      type: String,
    },
    city: {
      type: String,
    },
    adress: {
      type: String,
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

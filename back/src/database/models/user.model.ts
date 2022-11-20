import mongoose from "mongoose";
import bcrypt from "bcrypt";
import { RolesDocument } from "./roles.model";

export interface UserDocument extends mongoose.Document {
  username: string;
  birthdate: Date;
  img: string;
  social: string;
  email: string;
  password: string;
  role: RolesDocument["_id"];
}

const userSchema = new mongoose.Schema(
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
    role: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Roles",
    },
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  let user = this;

  if (!user.isModified("password")) {
    return next();
  }

  try {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hashSync(user.password, salt);

    user.password = hash;
    return next();
  } catch (err: any) {
    throw new Error("Error hashing \n" + err);
  }
});

const UserModel = mongoose.model<UserDocument>("User", userSchema);

export default UserModel;

import mongoose from "mongoose";
import bcrypt from "bcrypt";

export interface NurseryDocument extends mongoose.Document {
  username: string;
  birthdate: Date;
  img: string;
  social: string;
  email: string;
  password: string;
  telephone: number;
  province: string;
  city: string;
  address: string;
  role: number;
}

const nurserySchema = new mongoose.Schema(
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
      required: false,
      unique: true,
    },
    province: {
      type: String,
      maxlength: 20,
      required: false,
    },
    city: {
      type: String,
      maxlength: 20,
      required: false,
    },
    adress: {
      type: String,
      maxlength: 50,
      required: false,
    },
    role: {
      type: Number,
      default: 0,
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
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hashSync(nursery.password, salt);

    nursery.password = hash;
    return next();
  } catch (err: any) {
    throw new Error("Error hashing \n" + err);
  }
});

const NurseryModel = mongoose.model<NurseryDocument>("Nursery", nurserySchema);

export default NurseryModel;

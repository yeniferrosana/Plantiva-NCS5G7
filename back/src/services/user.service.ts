import bcrypt from "bcrypt";
import UserModel from "../database/models/user.model";

//funcion para crear un usuario en la bbdd
export const createUser = async (input: {}) => {
  try {
    const user = await UserModel.create(input);

    return user;
  } catch (err: any) {
    throw new Error(err);
  }
};

//funcion que valida pwd. recibe como parametros email y pwd ingresados en request. defino los tipos
//el servicio se consume desde el controlador para la ruta /login
export const validatePassword = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  //busco user por email
  const user = await UserModel.findOne({ email: email });

  if (!user) {
    return false;
  }

  //comparo pwd
  const isValid = await bcrypt.compare(password, user.password);

  if (!isValid) {
    return false;
  }

  return user;
};

export const findAll = async () => {
  try {
    const users = await UserModel.find();

    return users;
  } catch (err: any) {
    throw new Error(err);
  }
};

export const findById = async (id: string) => {
  try {
    const user = await UserModel.findOne({ _id: id });
    if (!user) return false;

    return user;
  } catch (err: any) {
    throw new Error(err);
  }
};

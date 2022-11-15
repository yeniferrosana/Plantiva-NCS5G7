import bcrypt from "bcrypt";
import NurseryModel from "../database/models/nursery.model";

//funcion para crear un usuario en la bbdd
export const createuserNursery = async (input: {}) => {
  try {
    const userNursery = await NurseryModel.create(input);

    return userNursery;
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
  //busco userNursery por email
  const userNursery = await NurseryModel.findOne({ email: email });

  if (!userNursery) {
    return false;
  }

  //comparo pwd
  const isValid = await bcrypt.compare(password, userNursery.password);

  if (!isValid) {
    return false;
  }

  return userNursery;
};

export const findAll = async () => {
  try {
    const usersNursery = await NurseryModel.find();

    return usersNursery;
  } catch (err: any) {
    throw new Error(err);
  }
};

export const findById = async (id: string) => {
  try {
    const userNursery = await NurseryModel.findOne({ _id: id });
    if (!userNursery) return false;

    return userNursery;
  } catch (err: any) {
    throw new Error(err);
  }
};

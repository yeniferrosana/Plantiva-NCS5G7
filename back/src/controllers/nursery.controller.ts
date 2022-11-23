import { Request, Response } from "express";
import {
  createUserNursery,
  validatePassword,
  findAll,
  findById,
  updateNursery,
  deleteNursery
} from "../services/nursery.service";
import { hashPassword } from "../utils/jwt";

//register controller
export const registerNursery = async (req: Request, res: Response) => {
  try {
    const { username, email, password, telephone, province, city, adress } =
      req.body;

    if (
      !username ||
      !email ||
      (!password && !telephone && !province && !city && !adress)
    ) {
      return res.status(400).send("Missing fields");
    }

    const newNursery = {
      username,
      email,
      password,
      telephone,
      province,
      city,
      adress,
    };

    const nursery = await createUserNursery(newNursery);

    return res.send(nursery);
  } catch (err: any) {
    return res.status(409).send("Error at register" + err);
  }
};

//login controller
export const loginNursery = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).send("Missing fields");
    }
    const userValidation = { email, password };

    const validate = await validatePassword(userValidation);

    if (!validate) {
      return res.status(401).send("Wrong email or password");
    }

    return res.send("Nursery succesffully auth");
  } catch (err: any) {
    return res.status(409).send(err);
  }
};

//find all nurseries in DB
export const getNurseries = async (req: Request, res: Response) => {
  try {
    const nurseries = await findAll();

    return res.send(nurseries);
  } catch (err: any) {
    return res.status(409).send(err);
  }
};

//find one user by ID
export const getNurseryById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const nursery = await findById(id);

    return res.send(nursery);
  } catch (err: any) {
    return res.status(404).send("Nursery not found");
  }
};

// update nursery by ID
export const updateNurseryById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const nursery = await findById(id);
  if (!nursery) {
    return res.status(404).send("Nursery not found");
  }

  const { email, username, telephone, province, city, adress, password } =
    req.body;

  const hash = await hashPassword(password);
  const hashNursery = await hashPassword(nursery.password);

  const newNursery = {
    email: email ? email : nursery.email,
    username: username ? username : nursery.username,
    telephone: telephone ? telephone : nursery.telephone,
    province: province ? province : nursery.province,
    city: city ? city : nursery.city,
    adress: adress ? adress : nursery.adress,
    password: password ? hash : hashNursery,
  };
  try {
    const nursery = await updateNursery(id, newNursery);

    return res.send(nursery);
  } catch (err: any) {
    return res.status(400).send("Error updating Nursery " + err);
  }
};

// Nursery Delete of the BBDD
export const removeNursery = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { email, password, username } = req.body;

    if (!email || !password || !username)
      return res.status(404).send('No existe el link')

    const nurseryDelete = { email, password, username };
    const nurseryRemove = await deleteNursery(id, nurseryDelete);
    
    return res.status(200).send(`El usuario ${nurseryRemove} fue eliminado`);
  } catch (error: any) {
    if (error.kind === 'ObjectId') {
      return res.status(403).send("Fomrato User ID not found");
    }
    return res.status(500).send('Error del servidor')
  }
};

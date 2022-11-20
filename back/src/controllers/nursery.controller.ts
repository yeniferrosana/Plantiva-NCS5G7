import { Request, Response } from "express";
import bcrypt from "bcrypt";
import { createuserNursery, validatePassword, findAll, findById, updateNursery } from '../services/nursery.service';

//register controller
export const registerNursery = async (req: Request, res: Response) => {
    try {
      const { username, email, password, telephone, province, city, adress } = req.body;
  
      if (!username || !email || !password && !telephone && !province && !city && !adress) {
        return res.status(400).send("Missing fields");
      }
  
      const newNursery = { username, email, password, telephone, province, city, adress };
  
      const nursery = await createuserNursery(newNursery);
  
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
  
      return res.send("User succesffully auth");
    } catch (err: any) {
      return res.status(409).send(err);
    }
};
  
//find all users in DB
export const getNursery = async (req: Request, res: Response) => {
    try {
      const nurserys = await findAll();
  
      return res.send(nurserys);
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
      return res.status(404).send("User not found");
    }
};

// Nursery Update
export const putNursery = async (req:Request, res:Response) => {
    const { id } = req.params;
    const { email, username, telephone, province, city, adress, password } = req.body;
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hashSync(password, salt);
    const newEdit = {
        email,
        username,
        telephone,
        province,
        city,
        adress,
        password: hash
    };
    try {
        
        const nurseryId = await updateNursery(id, newEdit);
        return res.send(nurseryId);
    } catch (err: any) {
        return res.status(404).send("User not actualized");
    }
}
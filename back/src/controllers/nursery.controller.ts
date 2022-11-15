import { Request, Response } from "express";
import { createuserNursery, validatePassword, findAll, findById } from '../services/nursery.service';

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
    const { username, birthdate, email, telephone, province, ctiy, adress } = req.body;

    try {
        const nursery = await findById(id);
        if (nursery) {
            await nursery.update({
                username: req.body,
                birthdate: req.body,
                email: req.body,
                telephone: req.body,
                province: req.body,
                city: req.body,
                adress: req.body
            })
            res.json({
                message: "Registro se actualizo correctamente"
            })
        }
    } catch (error) {
        res.status(404).json({
            message: `No existe el usuario con el id ${id}`
        })
    }
}
  
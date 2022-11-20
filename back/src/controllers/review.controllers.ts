import { Request, Response } from "express";
import { createReview, updateReview } from '../services/review.service';

export const registerReview = async (req: Request, res: Response) => {
    try {
      const { username, description } = req.body;
      const { id } = req.params;
  
      if (!username || !description || !id ) {
        return res.status(400).send("Missing fields");
      }
  
      const newReview = { username, description, id };
  
      const review = await createReview(newReview);
  
      return res.send(review);
    } catch (err: any) {
      return res.status(409).send("Error at register" + err);
    }
};

// Nursery Update
export const putReview = async (req:Request, res:Response) => {
    const { id } = req.params;
    const { username, description } = req.body;
    const newEdit = {
        username: username.id,
        description
    };
    try {
        
        const reviewId = await updateReview(id, newEdit);
        return res.send(reviewId);
    } catch (err: any) {
        return res.status(404).send("Review not actualized");
    }
}
  

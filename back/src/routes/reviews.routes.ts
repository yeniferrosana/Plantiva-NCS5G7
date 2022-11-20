import { Router } from "express";
import { registerReview, putReview } from "../controllers/review.controllers";

const reviewRoutes = Router();

reviewRoutes.post("/:id", registerReview);

reviewRoutes.put("/editreview/:id", putReview);

export default reviewRoutes;
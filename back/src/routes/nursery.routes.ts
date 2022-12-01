import { Router } from "express";
import {
  getNurseryById,
  getNurseries,
  loginNursery,
  registerNursery,
  updateNurseryById,
  removeNursery,
} from "../controllers/nursery.controller";
import {
  authNurseryValidator,
  loginValidator,
} from "../middlewares/validators/validators";
import { verifyToken } from "../middlewares/validators/verifyToken";

const nurseryRoutes = Router();

/**
 * @swagger
 * components:
 *  schemas:
 *    Nursery:
 *      type: object
 *      required:
 *        - username
 *        - email
 *        - password
 *      properties:
 *        id:
 *          type: string
 *          description: the auto-generated id of nursery
 *        username:
 *          type: string
 *          description: the name of the nursery
 *      example:
 *        id: gQBOyGbxcQy6tEp0aZ78X
 *        username: nursery name
 *        email: nursery@nursermail.com
*/

/**
 * @swagger
 * /auth/nursery:
 *  get:
 *    summary: Returns a list of nurserys
 *    responses:
 *      200:
 *        description: the list of nursery
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Nursery'
*/

nurseryRoutes.get("/", verifyToken, getNurseries);

nurseryRoutes.get("/:id", verifyToken, getNurseryById);

nurseryRoutes.put("/:id", verifyToken, updateNurseryById);

nurseryRoutes.delete("/:id", verifyToken, removeNursery);

export default nurseryRoutes;

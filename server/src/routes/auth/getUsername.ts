import express, { Request, Response } from "express";
import { validateRequest, BadRequestError } from "@niftickets/common";
import { User } from "../../models/user";

const router = express.Router();

router.get(
  "/api/users/username/:email",
  validateRequest,
  async (req: Request, res: Response) => {
    const email = req.params.email;
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      throw new BadRequestError("Invalid credentials");
    }

    res.status(201).send(existingUser);
  }
);

export { router as getUsernameRouter };

import express, { Request, Response } from "express";
import { validateRequest, BadRequestError } from "@niftickets/common";
import { User } from "../../models/user";

const router = express.Router();

router.post(
  "/api/auth/reset",
  validateRequest,
  async (req: Request, res: Response) => {
    const { email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      throw new BadRequestError("Invalid credentials");
    }

    existingUser.set({
      email: email,
      password: password,
    });

    await existingUser.save();

    res.status(200).send(existingUser);
  }
);

export { router as resetPasswordRouter };

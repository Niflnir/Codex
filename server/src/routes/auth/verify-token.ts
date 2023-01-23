import { BadRequestError, validateRequest } from "@niftickets/common";
import express, { Request, Response } from "express";
import { Token } from "../../models/token";

const router = express.Router();

router.get(
  "/api/auth/verify/:token",
  validateRequest,
  async (req: Request, res: Response) => {
    const existingToken = await Token.findOne({ token: req.params.token });
    if (!existingToken) {
      throw new BadRequestError("Invalid token");
    }
    // it has to include localhost so that nginx can redirect to the frontend
    res.redirect("http://localhost/auth/reset");
  }
);

export { router as verifyTokenRouter };

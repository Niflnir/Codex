import { NotFoundError, requireAuth } from "@niftickets/common";
import express, { Request, Response } from "express";
import { Profile } from "../../models/profile";

const router = express.Router();

router.post(
  "/api/myaccount",
  requireAuth,
  async (req: Request, res: Response) => {
    const { description, picture } = req.body;
    const existingProfile = await Profile.updateOne({
      userId: req.currentUser!.id,
      $set: { description: description, picture: picture },
    });

    if (!existingProfile) {
      throw new NotFoundError();
    }

    res.status(204).send("Profile updated successfully");
  }
);

export { router as editProfileRouter };

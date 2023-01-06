import { NotFoundError, requireAuth } from "@niftickets/common";
import express, { Request, Response } from "express";
import { Profile } from "../models/profile";

const router = express.Router();

router.get(
  "/api/myaccount",
  requireAuth,
  async (req: Request, res: Response) => {
    const profile = await Profile.find({ userId: req.currentUser!.id });
    if (profile.length !== 0) {
      res.status(200).send(profile);
    } else {
      const newProfile = Profile.build({
        userId: req.currentUser!.id,
        description: "",
        picture: "",
      });
      await newProfile.save();
      res.status(200).send(newProfile);
    }
    throw new NotFoundError();
  }
);

export { router as getProfileRouter };

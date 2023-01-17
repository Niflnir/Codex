import { NotAuthorizedError, requireAuth } from "@niftickets/common";
import express, { Request, Response } from "express";
import { Spell } from "../../models/spell";
import { User } from "../../models/user";

const router = express.Router();

router.post(
  "/api/mycodex/favourite",
  requireAuth,
  async (req: Request, res: Response) => {
    const user = await User.findOne({ id: req.currentUser!.id });
    if (!user) {
      throw new NotAuthorizedError();
    }
    const isSpellFavourited = user.favourites.includes(req.body.id);
    if (req.body.check === true) {
      res.status(200).send(isSpellFavourited);
    } else {
      if (isSpellFavourited === true) {
        await User.updateOne(
          { _id: req.currentUser!.id },
          { $pull: { favourites: req.body.id } }
        );
        await Spell.updateOne(
          { _id: req.body.id },
          { $inc: { favouriteCount: -1 } }
        );
        res.status(204).send("Spell has been unfavourited successfully");
      } else {
        await User.updateOne(
          { _id: req.currentUser!.id },
          { $push: { favourites: req.body.id } }
        );
        await Spell.updateOne(
          { _id: req.body.id },
          { $inc: { favouriteCount: 1 } }
        );
        res.status(204).send("Spell has been favourited successfully");
      }
    }
  }
);

export { router as favouriteSpellRouter };

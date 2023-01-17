import { NotAuthorizedError, requireAuth } from "@niftickets/common";
import express, { Request, Response } from "express";
import { Spell } from "../../models/spell";
import { User } from "../../models/user";

const router = express.Router();

router.get(
  "/api/mycodex/favourites",
  requireAuth,
  async (req: Request, res: Response) => {
    const user = await User.findOne({ _id: req.currentUser!.id });
    if (!user) {
      throw new NotAuthorizedError();
    }
    const spells = await Spell.find(
      { _id: { $in: user.favourites } }
    );
    res.status(200).send({ favouritesList: user.favourites, favouriteSpells: spells });
  }
);

export { router as getFavouritesRouter };

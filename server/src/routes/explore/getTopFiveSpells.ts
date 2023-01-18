import { requireAuth } from "@niftickets/common";
import express, { Request, Response } from "express";
import { Spell, SpellAttrs } from "../../models/spell";

const router = express.Router();

const compare = (a: SpellAttrs, b: SpellAttrs) => {
  if (a.favouriteCount < b.favouriteCount) return 1;
  if (a.favouriteCount > b.favouriteCount) return -1;
  return 0;
};

router.get(
  "/api/explore/spells",
  requireAuth,
  async (req: Request, res: Response) => {
    const spells = await Spell.find({});
    spells.sort(compare);
    res.status(200).send(spells.slice(0, 5));
  }
);

export { router as getTopFiveSpellsRouter };

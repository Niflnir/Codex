import express, { Request, Response } from "express";
import { requireAuth, validateRequest } from "@niftickets/common";
import { Spell } from "../../../models/spell";

const router = express.Router();

router.post(
  "/api/spells",
  requireAuth,
  validateRequest,
  async (req: Request, res: Response) => {
    const { title, tags, body } = req.body;

    const spell = Spell.build({
      userId: req.currentUser!.id,
      title,
      tags,
      body,
    });
    await spell.save();

    res.status(201).send(spell);
  }
);

export { router as createSpellRouter };

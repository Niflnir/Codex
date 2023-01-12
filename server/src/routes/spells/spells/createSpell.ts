import express, { Request, Response } from "express";
import { body } from "express-validator";
import { requireAuth, validateRequest } from "@niftickets/common";
import { Spell } from "../../../models/spell";

const router = express.Router();

router.post(
  "/api/spells",
  requireAuth,
  [
    body("title").not().isEmpty().withMessage("Title is required"),
    body("body").not().isEmpty().withMessage("Body is required"),
  ],
  validateRequest,
  async (req: Request, res: Response) => {
    const { title, body, imagePaths } = req.body;

    const spell = Spell.build({
      title,
      body,
      imagePaths,
      userId: req.currentUser!.id,
    });
    await spell.save();

    res.status(201).send(spell);
  }
);

export { router as createSpellRouter };

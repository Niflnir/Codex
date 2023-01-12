import express, { Request, Response } from 'express';
import { body } from 'express-validator';
import { NotAuthorizedError, NotFoundError, requireAuth, validateRequest } from '@niftickets/common';
import { Spell } from '../../../models/spell';

const router = express.Router();

router.put('/api/spells/:id',
  requireAuth,
  [
    body('title')
      .not()
      .isEmpty()
      .withMessage('Title is required'),
    body('body')
      .not()
      .isEmpty()
      .withMessage('Body is required'),
  ],
  validateRequest,
  async (req: Request, res: Response) => {
    const spell = await Spell.findById(req.params.id);

    if (!spell) {
      throw new NotFoundError();
    }

    if (spell.userId !== req.currentUser!.id) {
      throw new NotAuthorizedError();
    }

    spell.set({
      title: req.body.title,
      body: req.body.body,
    });
    await spell.save();

    res.send(spell);
  });

export { router as updateSpellRouter };

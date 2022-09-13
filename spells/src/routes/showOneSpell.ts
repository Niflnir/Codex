import express, { Request, Response } from 'express';
import { Spell } from '../models/spell';
import { NotFoundError } from '@niftickets/common';

const router = express.Router();

router.get('/api/spells/:id', async (req: Request, res: Response) => {
  const spell = await Spell.findById(req.params.id);

  if(!spell) {
    throw new NotFoundError();
  }

  res.send(spell);
});

export { router as showOneSpellRouter }

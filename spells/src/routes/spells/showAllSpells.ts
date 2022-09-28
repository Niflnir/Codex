import { requireAuth } from '@niftickets/common';
import express, { Request, Response } from 'express';
import { Spell } from '../../models/spell';

const router = express.Router();

router.get('/api/spells', requireAuth, async (req: Request, res: Response) => {
  const spells = await Spell.find({userId: req.currentUser!.id});

  res.send(spells);
})

export { router as showAllSpellRouter };

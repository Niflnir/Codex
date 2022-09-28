import { requireAuth } from '@niftickets/common';
import express, { Request, Response } from 'express';
import { Spell } from '../../models/spell';

const router = express.Router();

router.post('/api/favourites/spells', requireAuth, async (req: Request, res: Response) => {
  if(req.body.spells && req.body.spells.length){
    const spells = await Spell.find({"_id": { $in : req.body.spells}});
    res.send(spells);
  }
  else{
    res.send([]);
  }
})

export { router as showSpellFavouritesRouter };

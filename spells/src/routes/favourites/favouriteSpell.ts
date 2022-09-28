import express, { Request, Response } from 'express';
import { requireAuth } from '@niftickets/common';
import { Favourites } from '../../models/favourites';

const router = express.Router();

router.post('/api/favourites', requireAuth, async (req: Request, res: Response) => {
  const response = await Favourites.find({ userId: req.currentUser!.id});
  if(response.length === 0){
    const favouriteSpell = Favourites.build({
      userId: req.currentUser!.id,
      spells: []
    })
    await favouriteSpell.save();
  }
  await Favourites.updateOne({"userId": req.currentUser!.id}, {$push: {"spells": req.body.id}});

  res.status(201).send("Spell has been favourited");
});

export { router as favouriteSpellRouter }

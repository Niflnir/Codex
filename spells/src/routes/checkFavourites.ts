import { requireAuth } from '@niftickets/common';
import express, { Request, Response } from 'express';
import { Favourites } from '../models/favourites';

const router = express.Router();

router.get('/api/favourites/:id', requireAuth, async (req: Request, res: Response) => {
  const favourite = await Favourites.find({spells: req.params.id});

  if(!favourite.length || favourite[0].userId != req.currentUser!.id){
    res.status(201).send([]);
  }
  else{
    res.status(201).send(favourite);
  }
})

export { router as checkFavouritesRouter };

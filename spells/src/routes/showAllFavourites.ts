import { requireAuth } from '@niftickets/common';
import express, { Request, Response } from 'express';
import { Favourites } from '../models/favourites';

const router = express.Router();

router.get('/api/favourites', requireAuth, async (req: Request, res: Response) => {
  const favourites = await Favourites.find({userId: req.currentUser!.id});

  res.send(favourites);
})

export { router as showAllFavouritesRouter };

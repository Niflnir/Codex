import { requireAuth } from '@niftickets/common';
import express, { Request, Response } from 'express';
import { Favourites } from '../../models/favourites';

const router = express.Router();

router.delete('/api/favourites/:id', requireAuth, async (req: Request, res: Response) => {
  const favourite = await Favourites.updateOne({"userId": req.currentUser!.id}, {$pull: {'spells': req.params.id}});

  res.status(200).send(favourite);
})

export { router as deleteFavouritesRouter };

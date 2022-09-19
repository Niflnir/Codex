import express, { Request, Response } from 'express';
import { NotAuthorizedError, NotFoundError, requireAuth, validateRequest } from '@niftickets/common';
import { Spell } from '../models/spell';

const router = express.Router();

router.delete('/api/spells/:id', 
  requireAuth,
  validateRequest, 
  async (req: Request, res: Response) => {
    const spell = await Spell.findById(req.params.id);

    if(!spell){
      throw new NotFoundError();
    }

    if (spell.userId !== req.currentUser!.id){
      throw new NotAuthorizedError();
    }

    await Spell.findByIdAndDelete(req.params.id);

    res.send("Spell deleted successfully");
});

export { router as deleteSpellRouter };

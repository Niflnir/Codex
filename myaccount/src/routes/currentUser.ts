import express from 'express';
import { currentUser } from '@niftickets/common';

const router = express.Router();

router.get('/api/myaccount/currentuser', currentUser, (req, res) => {
  res.send({ currentUser: req.currentUser || null });
})

export { router as currentUserRouter };

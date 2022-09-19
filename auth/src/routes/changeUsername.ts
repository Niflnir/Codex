import express, { Request, Response } from 'express'; 
import { body } from 'express-validator';
import { validateRequest, BadRequestError} from '@niftickets/common'
import { User } from '../models/user';

const router = express.Router();

router.post('/api/users/username',
  [
    body('email')
      .isEmail()
      .withMessage('Email must be valid'),
    body('username')
      .isString()
      .notEmpty()
      .withMessage("Username cannot be empty")
  ], 
  validateRequest,
  async (req: Request, res: Response) => {
    const { email, username } = req.body;

    const existingUser = await User.findOne({ email });
    if(!existingUser) {
      throw new BadRequestError('Invalid credentials');
    }

    existingUser.set({ "username": username });
    existingUser.save();

    res.status(201).send(existingUser.username);
  }
)

export {router as changeUsernameRouter};

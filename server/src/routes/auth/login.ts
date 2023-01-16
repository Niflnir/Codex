import express, { Request, Response } from "express";
import { body } from "express-validator";
import { validateRequest, BadRequestError } from "@niftickets/common";
import { User } from "../../models/user";
import { Password } from "../../services/password";
import jwt from "jsonwebtoken";

const router = express.Router();

router.post(
  "/api/auth/login",
  [
    body("username")
      .trim()
      .notEmpty()
      .withMessage("You must supply a username"),
    body("password")
      .trim()
      .notEmpty()
      .withMessage("You must supply a password"),
  ],
  validateRequest,
  async (req: Request, res: Response) => {
    const { username, password } = req.body;

    const existingUser = await User.findOne({ username });
    if (!existingUser) {
      throw new BadRequestError("Invalid credentials");
    }

    const passwordsMatch = await Password.compare(
      existingUser.password,
      password
    );
    if (!passwordsMatch) {
      // throw Error("wrong password");
      throw new BadRequestError('Incorrect password. Please try again.')
    }
    // Generate JWT
    const userJwt = jwt.sign(
      {
        id: existingUser.id,
        username: existingUser.username,
      },
      process.env.JWT_KEY!
    );

    // Store it on session object
    req.session = {
      jwt: userJwt,
    };

    res.status(200).send(existingUser);
  }
);

export { router as loginRouter };

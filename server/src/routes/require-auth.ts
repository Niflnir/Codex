import { NotAuthorizedError } from "@niftickets/common";
import { Request, Response, NextFunction } from "express";

export const requireAuth = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log(req.currentUser);
  if (!req.currentUser) {
    throw new NotAuthorizedError();
  }
  next();
};

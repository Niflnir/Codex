import express, { Response, Request } from "express";
import { requireAuth } from "@niftickets/common";
import { getFileStream } from "../../helper/s3";

const router = express.Router();

router.get(
  "/api/images/:key",
  requireAuth,
  async (req: Request, res: Response) => {
    const key = req.params.key;
    const readStream = getFileStream(key);

    readStream.pipe(res);
  }
);

export { router as getImagesRouter };

import express, { Response, Request } from "express";
import { requireAuth } from "@niftickets/common";
import { uploadFile } from "../../helper/s3";
import util from "util";
import fs from "fs";

const router = express.Router();
const unlinkFile = util.promisify(fs.unlink);

router.post("/api/images", requireAuth, async (req: Request, res: Response) => {
  const files = req.files;
  const imagePaths: Array<string> = [];
  for (let i = 0; i < files!.length; i++) {
    // @ts-ignore
    const result = await uploadFile(files[i]);
    imagePaths.push(`api/images/${result.Key}`);
    // @ts-ignore
    await unlinkFile(files[i].path);
  }
  res.send({ imagePaths: imagePaths });
});

export { router as uploadImagesRouter };

import express from "express";
import "express-async-errors"; // handles async error, dont delete
import { json } from "body-parser";
import cookieSession from "cookie-session";
import { currentUser, errorHandler, NotFoundError } from "@niftickets/common";

import { signupRouter } from "./routes/auth/signup";
import { loginRouter } from "./routes/auth/login";
import { getUserSpellsRouter } from "./routes/mycodex/getUserSpells";
import { getFavouritesRouter } from "./routes/mycodex/getFavourites";
import { favouriteSpellRouter } from "./routes/mycodex/favouriteSpell";
import { createSpellRouter } from "./routes/creation/createSpell";
import { logoutRouter } from "./routes/auth/logout";
import { forgotPasswordRouter } from "./routes/auth/forgot-password";
import { getTopSpellsRouter } from "./routes/explore/getTopSpells";
import { verifyTokenRouter } from "./routes/auth/verify-token";
import { resetPasswordRouter } from "./routes/auth/reset-password";

const app = express();
app.set("trust proxy", true);
app.use(json());
app.use(
  cookieSession({
    signed: false,
  })
);

// Auth
app.use(currentUser);
app.use(loginRouter);
app.use(logoutRouter);
app.use(signupRouter);
app.use(forgotPasswordRouter);
app.use(verifyTokenRouter);
app.use(resetPasswordRouter);

// Creation
app.use(createSpellRouter); // post

// MyCodex
app.use(getUserSpellsRouter); // get
app.use(getFavouritesRouter); // get
app.use(favouriteSpellRouter); // post

// Explore
app.use(getTopSpellsRouter);

app.all("*", async (req, res) => {
  throw new NotFoundError();
});

app.use(errorHandler);

export { app };

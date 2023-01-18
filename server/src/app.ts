import express from "express";
import "express-async-errors"; // handles async error, dont delete
import { json } from "body-parser";
import cookieSession from "cookie-session";
import { currentUser, errorHandler, NotFoundError } from "@niftickets/common";

import { signoutRouter } from "./routes/auth/signout";
import { signupRouter } from "./routes/auth/signup";
import { changeUsernameRouter } from "./routes/auth/changeUsername";
import { getUsernameRouter } from "./routes/auth/getUsername";
import { loginRouter } from "./routes/auth/login";
import { getUserSpellsRouter } from "./routes/mycodex/getUserSpells";
import { getFavouritesRouter } from "./routes/mycodex/getFavourites";
import { favouriteSpellRouter } from "./routes/mycodex/favouriteSpell";

import { showAllSpellRouter } from "./routes/spells/spells/showAllSpells";
import { showAllUsersSpellsRouter } from "./routes/spells/spells/showAllUsersSpells";
import { showOneSpellRouter } from "./routes/spells/spells/showOneSpell";
import { createSpellRouter } from "./routes/creation/createSpell";
import { updateSpellRouter } from "./routes/spells/spells/updateSpell";
import { deleteSpellRouter } from "./routes/spells/spells/deleteSpell";
import { getImagesRouter } from "./routes/spells/getImages";
import { uploadImagesRouter } from "./routes/spells/upload";
import { showAllFavouritesRouter } from "./routes/spells/favourites/showAllFavourites";
import { checkFavouritesRouter } from "./routes/spells/favourites/checkFavourites";
import { showSpellFavouritesRouter } from "./routes/spells/favourites/showSpellFavourites";
import { deleteFavouritesRouter } from "./routes/spells/favourites/deleteFavourites";
import { getTopFiveSpellsRouter } from "./routes/explore/getTopFiveSpells";

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
app.use(signoutRouter);
app.use(signupRouter);
app.use(getUsernameRouter);
app.use(changeUsernameRouter);

// Creation
app.use(createSpellRouter); // post

// MyCodex
app.use(getUserSpellsRouter); // get
app.use(getFavouritesRouter); // get
app.use(favouriteSpellRouter); // post

// Explore
app.use(getTopFiveSpellsRouter); //get

// Spells
app.use(showAllSpellRouter); // get
app.use(showAllUsersSpellsRouter); // get
app.use(showOneSpellRouter); // get dynamic
app.use(updateSpellRouter); // put
app.use(deleteSpellRouter); // delete

app.use(getImagesRouter); // get dynamic
app.use(uploadImagesRouter); // post

app.use(showAllFavouritesRouter); // get
app.use(checkFavouritesRouter); // get dynamic
app.use(showSpellFavouritesRouter); // post
app.use(deleteFavouritesRouter); // delete

app.all("*", async (req, res) => {
  throw new NotFoundError();
});

app.use(errorHandler);

export { app };

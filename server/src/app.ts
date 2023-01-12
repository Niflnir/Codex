import express from "express";
import "express-async-errors"; // handles async error, dont delete
import { json } from "body-parser";
import cookieSession from "cookie-session";

import { currentUserRouter } from "./routes/auth/current-user";
import { signinRouter } from "./routes/auth/signin";
import { signoutRouter } from "./routes/auth/signout";
import { signupRouter } from "./routes/auth/signup";
import { currentUser, errorHandler, NotFoundError } from "@niftickets/common";
import { changeUsernameRouter } from "./routes/auth/changeUsername";
import { getUsernameRouter } from "./routes/auth/getUsername";

import { showAllSpellRouter } from "./routes/spells/spells/showAllSpells";
import { showAllUsersSpellsRouter } from "./routes/spells/spells/showAllUsersSpells";
import { showOneSpellRouter } from "./routes/spells/spells/showOneSpell";
import { createSpellRouter } from "./routes/spells/spells/createSpell";
import { updateSpellRouter } from "./routes/spells/spells/updateSpell";
import { deleteSpellRouter } from "./routes/spells/spells/deleteSpell";
import { getImagesRouter } from "./routes/spells/getImages";
import { uploadImagesRouter } from "./routes/spells/upload";
import { showAllFavouritesRouter } from "./routes/spells/favourites/showAllFavourites";
import { checkFavouritesRouter } from "./routes/spells/favourites/checkFavourites";
import { favouriteSpellRouter } from "./routes/spells/favourites/favouriteSpell";
import { showSpellFavouritesRouter } from "./routes/spells/favourites/showSpellFavourites";
import { deleteFavouritesRouter } from "./routes/spells/favourites/deleteFavourites";

import { getProfileRouter } from "./routes/myaccount/getProfile";
import { editProfileRouter } from "./routes/myaccount/editProfile";

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

app.use(currentUserRouter);
app.use(signinRouter);
app.use(signoutRouter);
app.use(signupRouter);
app.use(getUsernameRouter);
app.use(changeUsernameRouter);

// Spells
app.use(showAllSpellRouter); // get
app.use(showAllUsersSpellsRouter); // get
app.use(showOneSpellRouter); // get dynamic
app.use(createSpellRouter); // post
app.use(updateSpellRouter); // put
app.use(deleteSpellRouter); // delete

app.use(getImagesRouter); // get dynamic
app.use(uploadImagesRouter); // post

app.use(showAllFavouritesRouter); // get
app.use(checkFavouritesRouter); // get dynamic
app.use(favouriteSpellRouter); // post
app.use(showSpellFavouritesRouter); // post
app.use(deleteFavouritesRouter); // delete

// MyAccount
app.use(getProfileRouter); // get
app.use(editProfileRouter); // post

app.all("*", async (req, res) => {
  throw new NotFoundError();
});

app.use(errorHandler);

export { app };

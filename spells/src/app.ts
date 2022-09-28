import express from 'express';
import 'express-async-errors'; // do not remove
import {json} from 'body-parser';
import cookieSession from 'cookie-session';
import { errorHandler, NotFoundError, currentUser } from '@niftickets/common';
import { createSpellRouter } from './routes/spells/createSpell';
import { showAllSpellRouter } from './routes/spells/showAllSpells';
import { showOneSpellRouter } from './routes/spells/showOneSpell';
import { updateSpellRouter } from './routes/spells/updateSpell';
import { favouriteSpellRouter } from './routes/favourites/favouriteSpell';
import { showAllFavouritesRouter } from './routes/favourites/showAllFavourites';
import { checkFavouritesRouter } from './routes/favourites/checkFavourites';
import { deleteFavouritesRouter } from './routes/favourites/deleteFavourites';
import { showSpellFavouritesRouter } from './routes/favourites/showSpellFavourites';
import { uploadImagesRouter } from './routes/upload';
import { getImagesRouter } from './routes/getImages';
import { deleteSpellRouter } from './routes/spells/deleteSpell';
import { showAllUsersSpellsRouter } from './routes/spells/showAllUsersSpells';

const app = express();
app.set('trust proxy', true);
app.use(json());
app.use( cookieSession({ signed: false,
    secure: process.env.NODE_ENV !== 'test'
  })
)
app.use(currentUser);

app.use(showAllSpellRouter); // get
app.use(showAllUsersSpellsRouter) // get
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

app.all('*', async(req, res) => {
  throw new NotFoundError();
});

app.use(errorHandler);

export { app };

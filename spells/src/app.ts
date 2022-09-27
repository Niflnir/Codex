import express from 'express';
import 'express-async-errors';
import {json} from 'body-parser';
import cookieSession from 'cookie-session';
import { errorHandler, NotFoundError, currentUser } from '@niftickets/common';
import { createSpellRouter } from './routes/createSpell';
import { showAllSpellRouter } from './routes/showAllSpells';
import { showOneSpellRouter } from './routes/showOneSpell';
import { updateSpellRouter } from './routes/updateSpell';
import { favouriteSpellRouter } from './routes/favouriteSpell';
import { showAllFavouritesRouter } from './routes/showAllFavourites';
import { checkFavouritesRouter } from './routes/checkFavourites';
import { deleteFavouritesRouter } from './routes/deleteFavourites';
import { showSpellFavouritesRouter } from './routes/showSpellFavourites';
import { uploadImagesRouter } from './routes/upload';
import { getImagesRouter } from './routes/getImages';
import { deleteSpellRouter } from './routes/deleteSpell';
import { showAllUsersSpellsRouter } from './routes/showAllUsersSpells';

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

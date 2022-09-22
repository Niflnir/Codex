import express from 'express';
import 'express-async-errors'; // handles async error, dont delete
import {json} from 'body-parser';
import cookieSession from 'cookie-session';

import {currentUserRouter} from './routes/current-user';
import {signinRouter} from './routes/signin';
import {signoutRouter} from './routes/signout';
import {signupRouter} from './routes/signup';
import {errorHandler, NotFoundError} from '@niftickets/common'
import {changeUsernameRouter} from './routes/changeUsername';
import {getUsernameRouter} from './routes/getUsername';

const app = express();
app.set('trust proxy', true);
app.use(json());
app.use(
  cookieSession({
    signed: false,
    // secure: process.env.NODE_ENV !== 'test'
    secure: false,
  })
)

app.use(currentUserRouter);
app.use(signinRouter);
app.use(signoutRouter);
app.use(signupRouter);
app.use(getUsernameRouter);
app.use(changeUsernameRouter);

app.all('*', async(req, res) => {
  throw new NotFoundError();
});

app.use(errorHandler)

export { app };

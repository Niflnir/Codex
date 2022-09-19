import request from 'supertest';
import { app } from '../../app';

it('has a route handler listening to /api/favourites for post request', async() => {
  const response = await request(app)
    .post('/api/spells')
    .send({});

  expect(response.status).not.toEqual(404);
})

it('returns a list of favourites', async() => {
  const response = await request(app)
    .post('/api/favourites')
    .set("Cookie", global.signin())
    .send({id: "123"})
})

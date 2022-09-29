import request from 'supertest';
import { app } from '../../../app';

it('it returns the spell if it has been favourited', async() => {
  const cookie = global.signin();
  const spell = await request(app)
    .post('/api/spells')
    .set('Cookie', cookie)
    .send({
      title: 'hello',
      body: 'hello'
    })
    .expect(201);

  await request(app)
    .get('/api/favourites')
    .set("Cookie", cookie)
    .expect(200)
})

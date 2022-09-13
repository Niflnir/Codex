import mongoose from 'mongoose';
import request from 'supertest';
import { app } from '../../app';

it('returns a 404 if the spell is not found', async () => {
  const id = new mongoose.Types.ObjectId().toHexString(); 
  await request(app)
    .get(`/api/spells/${id}`)
    .send()
    .expect(404);
})

it('returns the spell if the spell is found', async () => {
  const title = 'first spell';
  const body = 'first spell';

  const response = await request(app)
    .post('/api/spells')
    .set('Cookie', global.signin())
      .send({
      title, 
      body,
    })
    .expect(201)

  const spellResponse = await request(app)
    .get(`/api/spells/${response.body.id}`)
    .send()
    .expect(200);

  expect(spellResponse.body.title).toEqual(title);
  expect(spellResponse.body.body).toEqual(body);
})

import request from 'supertest';
import { app } from '../../app';

const createTicket = () => {
  return request(app)
    .post('/api/spells')
    .set('Cookie', global.signin())
    .send({
      title: 'first spell',
      body: 'first spell',
      image: 'imageurl'
    });
}

it('can fetch a list of spells', async () => {
  await createTicket();
  await createTicket();
  await createTicket();

  const response = await request(app)
    .get('/api/tickets')
    .send()
    .expect(200);

  expect(response.body.length).toEqual(3);
})

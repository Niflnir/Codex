import request from "supertest";
import { app } from "../../../../app";

it("favourites a spell if the spell is not favourited", async () => {
  const cookie = await global.signin();
  const spell = await request(app)
    .post("/api/spells")
    .set("Cookie", cookie)
    .send({
      title: "hello",
      body: "hello",
    })
    .expect(201);

  await request(app)
    .post("/api/favourites")
    .set("Cookie", cookie)
    .send({ id: spell.body.id })
    .expect(201);
});

it("unfavourites a spell if the spell is favourited", async () => {
  const cookie = await global.signin();
  const spell = await request(app)
    .post("/api/spells")
    .set("Cookie", cookie)
    .send({
      title: "hello",
      body: "hello",
    })
    .expect(201);

  await request(app)
    .post("/api/favourites")
    .set("Cookie", cookie)
    .send({ id: spell.body.id })
    .expect(201);

  await request(app)
    .post("/api/favourites")
    .set("Cookie", cookie)
    .send({ id: spell.body.id })
    .expect(201);
});

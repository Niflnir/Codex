import request from "supertest";
import { app } from "../../../../app";
import { Spell } from "../../../../models/spell";

it("has a route handler listening to /api/spells for post request", async () => {
  const response = await request(app).post("/api/spells").send({});

  expect(response.status).not.toEqual(404);
});

it("returns a 401 if the user is not authenticated ", async () => {
  await request(app).post("/api/spells").send({}).expect(401);
});

it("returns a status other than 401 if the user is signed in", async () => {
  const response = await request(app)
    .post("/api/spells")
    .set("Cookie", await global.signin())
    .send({});

  expect(response.status).not.toEqual(401);
});

it("returns an error if an invalid title is provided", async () => {
  await request(app)
    .post("/api/spells")
    .set("Cookie", await global.signin())
    .send({
      title: "",
      body: "hello",
    })
    .expect(400);

  await request(app)
    .post("/api/spells")
    .set("Cookie", await global.signin())
    .send({
      body: "body",
    })
    .expect(400);
});

it("returns an error if an invalid body is provided", async () => {
  await request(app)
    .post("/api/spells")
    .set("Cookie", await global.signin())
    .send({
      title: "hello",
      body: "",
    })
    .expect(400);

  await request(app)
    .post("/api/spells")
    .set("Cookie", await global.signin())
    .send({
      title: "hello",
    })
    .expect(400);
});

it("creates a spell with valid input", async () => {
  await request(app)
    .post("/api/spells")
    .set("Cookie", await global.signin())
    .send({
      title: "hello",
      body: "hello",
    })
    .expect(201);

  const spells = await Spell.find({});
  expect(spells.length).toEqual(1);
  expect(spells[0].body).toEqual("hello");
});

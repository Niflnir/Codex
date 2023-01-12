import mongoose from "mongoose";
import request from "supertest";
import { app } from "../../../../app";

it("returns a 401 if the user is not authenticated ", async () => {
  await request(app).post("/api/spells").send({}).expect(401);
});

it("returns status 404 if spell not found", async () => {
  const id = new mongoose.Types.ObjectId().toHexString();
  await request(app)
    .delete(`/api/spells/${id}`)
    .set("Cookie", await global.signin())
    .expect(404);
});

it("returns status 200 if spell is deleted successfully", async () => {
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
    .delete(`/api/spells/${spell.body.id}`)
    .set("Cookie", cookie)
    .expect(200);
});

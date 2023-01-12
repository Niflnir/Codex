import request from "supertest";
import { app } from "../../../../app";

it("can fetch a list of spells", async () => {
  const cookie = await global.signin();
  await request(app)
    .post("/api/spells")
    .set("Cookie", cookie)
    .send({
      title: "first spell",
      body: "first spell",
    })
    .expect(201);

  const response = await request(app)
    .get("/api/spells")
    .set("Cookie", cookie)
    .expect(200);

  expect(response.body.length).toEqual(1);
});

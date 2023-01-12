import request from "supertest";
import { app } from "../../../../app";

it("can fetch a list of spells from all users", async () => {
  const cookie = await global.signin();
  await request(app)
    .post("/api/spells")
    .set("Cookie", cookie)
    .send({
      title: "first spell",
      body: "first spell",
    })
    .expect(201);

  await request(app)
    .post("/api/spells")
    .set("Cookie", await global.signin())
    .send({
      title: "second spell",
      body: "second spell",
    })
    .expect(201);

  const response = await request(app)
    .get("/api/spells/all")
    .set("Cookie", cookie)
    .expect(200);

  expect(response.body.length).toEqual(2);
});

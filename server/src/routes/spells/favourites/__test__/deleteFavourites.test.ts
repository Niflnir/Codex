import request from "supertest";
import { app } from "../../../../app";

it("deletes specified spell", async () => {
  const cookie = await global.signin();
  const id = "123";
  await request(app)
    .post("/api/favourites")
    .set("Cookie", cookie)
    .send({
      id: id,
    })
    .expect(201);

  await request(app)
    .delete(`/api/favourites/${id}`)
    .set("Cookie", cookie)
    .expect(200);
});

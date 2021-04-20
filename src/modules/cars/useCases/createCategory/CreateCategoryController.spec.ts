import request from "supertest";

import { app } from "@shared/infra/http/app";

describe("Create Category Controller", async () => {
  it("test", async () => {
    await request(app).get("/cars/available").expect(200);
    return console.log(test);

    // console.log(request(app));
  });
});

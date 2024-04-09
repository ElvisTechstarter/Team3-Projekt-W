const request = require("supertest");
const app = require("../../../server");

describe("GET /v1/jeddebook_de_en/all", () => {
  test.skip("responds with json", async () => {
    const response = await request(app)
      .get("/v1/jeddebook_de_en/all")
      .expect("Content-Type", /json/)
      .expect(200);
    expect(response.body).toEqual([]);
  });
});
